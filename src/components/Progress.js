function Progress() {
  return (
    <header className="progress">
      <progress max={15} value={1} />

      <p>
        Question: <strong>x</strong> / X
      </p>

      <p>
        Points: <strong>x</strong> / X
      </p>
    </header>
  );
}

export default Progress;
