import { useState, useEffect } from "react";

export const CurrentTime = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="current-time-wrapper">
      <div className="time">{time}</div>
    </div>
  );
};
