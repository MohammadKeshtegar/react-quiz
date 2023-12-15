function FinishScreen() {
  return (
    <div className="finish-screen">
      <p className="result">You scored x out of X(%X)</p>
      <p className="highscore">(Highscore: X points)</p>
      <button className="btn btn-ui">Restart Quiz</button>
    </div>
  );
}

export default FinishScreen;
