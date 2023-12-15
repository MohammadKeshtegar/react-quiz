import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Progress from "./Progress";
import Question from "./Question";
import StartScreen from "./StartScreen";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Main>
        {/* <StartScreen /> */}
        <>
          {/* <Progress />
          <Question />
          <Footer /> */}
        </>
        <FinishScreen />
      </Main>
    </div>
  );
}
