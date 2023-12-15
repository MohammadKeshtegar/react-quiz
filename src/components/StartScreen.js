function StartScreen({ dispatch }) {
  return (
    <div className="start-screen">
      <h2>Welcome to the React Quiz!</h2>
      <p>15 questions to test your react mastery</p>
      <button className="btn btn-start" onClick={() => dispatch({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
