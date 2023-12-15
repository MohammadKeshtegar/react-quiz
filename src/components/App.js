import { useEffect, useReducer } from "react";

import FinishScreen from "./FinishScreen";
import StartScreen from "./StartScreen";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Question from "./Question";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import Timer from "./Timer";
import Main from "./Main";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: 0,
};

const SECS_PER_QUESTION = 1;

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active", secondsRemaining: state.questions.length * SECS_PER_QUESTION };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore: state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready", highScore: state.highScore };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        // status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highScore, secondsRemaining }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const question = questions[index];
  const totalPoints = questions.reduce((acc, cur) => cur.points + acc, 0);

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch(`http://localhost:8000/questions`);
        const data = await res.json();
        dispatch({ type: "dataRecieved", payload: data });
      } catch (err) {
        console.error(err.message);
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen dispatch={dispatch} />}
        {status === "active" && (
          <>
            <Progress
              numQuestions={numQuestions}
              points={points}
              answer={answer}
              index={index}
              totalPoints={totalPoints}
            />
            <Question question={question} answer={answer} dispatch={dispatch} />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton answer={answer} dispatch={dispatch} index={index} numQuestions={numQuestions} />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen points={points} totalPoints={totalPoints} highScore={highScore} dispatch={dispatch} />
        )}
      </Main>
    </div>
  );
}
