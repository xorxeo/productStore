import { useState, useEffect } from "react";

export const CurrentTime = () => {
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);
  }, []);

  return (
    <div className="current-time-wrapper">
          <div className="time">{time}</div>
          {/* <div className="date">{date}</div> */}
    </div>
  );
};
