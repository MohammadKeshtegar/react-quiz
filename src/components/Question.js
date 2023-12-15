function Question() {
  return (
    <div className="question-container">
      <h4>Which is the most popular JavaScript framework?</h4>
      <ul className="options">
        <button className="btn btn-option">Angular</button>
        <button className="btn btn-option">React</button>
        <button className="btn btn-option">Svelte</button>
        <button className="btn btn-option">Vue</button>
      </ul>
    </div>
  );
}

export default Question;
