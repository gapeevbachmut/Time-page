"use client";
import ConvertTime from "../ConvertTime/ConvertTime";
import { useEffect } from "react";
import { useTimeStore } from "@/store/timeStore";
import css from "./Countdown.module.css";

export default function Countdown() {
  const diffFrom = useTimeStore((state) => state.diffFrom);

  const {
    now,
    weddingDay,
    andriiBirthDay,
    iraBirthDay,
    maximBirthDay,
    bublikBirthDay,
    goItTeaching,
    endGoItTeaching,
    evacDate,
    start,
  } = useTimeStore();

  const people = [
    { name: "Андрій", date: andriiBirthDay },
    { name: "Ірина", date: iraBirthDay },
    { name: "Максим", date: maximBirthDay },
    { name: "Бублік", date: bublikBirthDay },
  ];

  useEffect(() => {
    start();
  }, [start]);
  if (!now) {
    return <p>Завантаження таймера...</p>;
  }

  const wedding = diffFrom(weddingDay);

  const evacTime = diffFrom(evacDate);

  const goItTime = endGoItTeaching.getTime() - goItTeaching.getTime();

  return (
    <section className={css.allTimeContainer}>
      <h5 className={css.nowDate}>Сьогодні: {now.toLocaleDateString()}</h5>
      <hr className={css.line} />

      <h3 className={css.allTitle}>Кому скільки років</h3>

      {people.map((person) => (
        <div key={person.name} className={css.dateBox}>
          <h4 className={css.dateName}>{person.name}</h4>
          <ConvertTime ms={diffFrom(person.date)!} />
        </div>
      ))}
      <hr className={css.line} />

      <div className={css.dateBox}>
        <h4 className={css.allTitle}> Наше весілля</h4>{" "}
        <ConvertTime ms={wedding!} />
      </div>
      <hr className={css.line} />

      <div>
        <div className={css.dateBox}>
          <h3 className={css.allTitle}>Навчання</h3>

          <h4 className={css.allTitle}>IT School GoIT - Fullstack Developer</h4>
          <ConvertTime ms={goItTime!} mode="date" />
        </div>
      </div>
      <hr className={css.line} />

      <div className={css.dateBox}>
        <h4 className={css.allTitle}>
          Скільки минуло часу, як ми покинули свій дім:
        </h4>
        <ConvertTime ms={evacTime!} />
      </div>
      <hr className={css.line} />
    </section>
  );
}
