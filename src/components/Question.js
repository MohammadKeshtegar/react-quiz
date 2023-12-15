import Options from "./Options";

function Question({ question, answer, dispatch }) {
  return (
    <div className="question-container">
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <Options
            key={option}
            option={option}
            question={question}
            index={index}
            answer={answer}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
