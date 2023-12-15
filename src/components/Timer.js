import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const secs = secondsRemaining % 60;
  const mins = Math.floor(secondsRemaining / 60);

  useEffect(
    function () {
      const id = setInterval(() => {
        if (secondsRemaining === 0) {
          dispatch({ type: "finish" });
        } else {
          dispatch({ type: "tick" });
        }
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch, secondsRemaining]
  );

  return (
    <div className="timer">
      {mins < 10 ? "0" + mins : mins} : {secs < 10 ? "0" + secs : secs}
    </div>
  );
}

export default Timer;
