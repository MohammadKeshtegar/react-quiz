function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index === numQuestions - 1)
    return (
      <button className="btn btn-next" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </button>
    );

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-next" onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
      </button>
    );
}

export default NextButton;
