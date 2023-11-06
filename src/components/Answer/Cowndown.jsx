import React, { useState, useEffect } from "react";

const Countdown = () => {
  const initialSeconds = 240;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [countdownStarted, setCountdownStarted] = useState(false);

  const startCountdown = () => {
    setCountdownStarted(true);
  };

  useEffect(() => {
    if (countdownStarted && seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [countdownStarted, seconds]);

  // Format the remaining time as minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="flex justify-around items-center">
      <div>
        <h1 className="text-3xl font-bold text-center">
          Take a Short Skill Test
        </h1>
        <p className="text-center">
          Test and evaluate your skills in this short assessment.
        </p>
      </div>
      {countdownStarted ? (
        <button className="font-bold text-2xl bg-[#008060] text-white px-8 py-4 rounded-md mt-4">
          {minutes}:
          {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
        </button>
      ) : (
        <button
          className="font-bold text-2xl bg-[#008060] text-white px-8 py-4 rounded-md mt-4"
          onClick={startCountdown}
        >
          Start
        </button>
      )}
    </div>
  );
};

export default Countdown;
