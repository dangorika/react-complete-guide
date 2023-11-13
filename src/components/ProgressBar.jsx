import { useEffect, useState } from "react";

export default function ProgressBar({ timerValue }) {
  const [remainingTime, setRemainingTime] = useState(timerValue);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timerValue} />;
}
