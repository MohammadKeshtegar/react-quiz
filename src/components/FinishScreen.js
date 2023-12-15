function FinishScreen({ points, totalPoints, highScore, dispatch }) {
  const percentage = Math.floor((points / totalPoints) * 100);

  return (
    <div className="finish-screen">
      <p className="result">
        You scored {points} out of {totalPoints}(%{percentage})
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
