//

//            таймер на одній сторінці!!!

// -------------------------------------------------------
"use client";
import css from "./TimerNewYear.module.css";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const NEW_YEAR_DATE = new Date("January 1, 2026 00:00:00");

export default function TimerNewYear() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = NEW_YEAR_DATE.getTime() - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft(convertMsNY(diff));
    };

    tick();
    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className={css.timerContainer}>
      <h2 className={css.timerTitle}>До Нового року залишилось:</h2>
      <p className={css.timerText}>
        {timeLeft.days} д. {pad(timeLeft.hours)} г. {pad(timeLeft.minutes)} хв.{" "}
        {pad(timeLeft.seconds)} с.
      </p>
    </div>
  );
}

function convertMsNY(ms: number) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  return {
    days: Math.floor(ms / day),
    hours: Math.floor((ms % day) / hour),
    minutes: Math.floor((ms % hour) / minute),
    seconds: Math.floor((ms % minute) / second),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");
