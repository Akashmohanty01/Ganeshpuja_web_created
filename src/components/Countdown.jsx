// src/components/Countdown.jsx
import { useEffect, useState } from 'react';
import React from "react";

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-6 mt-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="bg-emerald text-white px-4 py-2 rounded shadow">
          <p className="text-2xl font-bold">{value}</p>
          <span className="text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default Countdown;
