function Options({ option, answer, index, question, dispatch }) {
  const hasAnswered = answer !== null;

  return (
    <button
      className={`btn btn-option ${answer === index ? "answer" : ""} ${
        hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""
      }`}
      disabled={hasAnswered}
      onClick={() => dispatch({ type: "newAnswer", payload: index })}
    >
      {option}
    </button>
  );
}

export default Options;
