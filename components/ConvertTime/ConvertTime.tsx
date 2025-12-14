// "use client";

// type Props = { ms: number };

// const ConvertTime = ({ ms }: Props) => {
//   // Захист від відʼємного часу
//   const safeMs = Math.abs(ms);

//   ////////////////--  CONVERT   TIME   //////////////////////////////////

//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   const year = day * 365;

//   const years = Math.floor(safeMs / year);
//   const days = Math.floor((safeMs % year) / day);
//   const hours = Math.floor(((safeMs % year) % day) / hour);
//   const minutes = Math.floor((((safeMs % year) % day) % hour) / minute);
//   const seconds = Math.floor(
//     ((((safeMs % year) % day) % hour) % minute) / second
//   );

//   return (
//     <section>
//       <p>
//         Років-<span>{years}</span>: Днів-<span>{days}</span>: Годин-
//         <span>{hours}</span>: Хвилин-
//         <span>{minutes}</span>: Секунд-<span>{seconds}</span>
//       </p>
//     </section>
//   );
// };
// export default ConvertTime;
////////////////////////////////////////////////////////
"use client";

import { convertMs } from "@/helper/convertMs";
import css from "./ConvertTime.module.css";

type Props = {
  ms?: number | null;
  mode?: "full" | "date" | "clock";
};

export default function ConvertTime({ ms, mode = "full" }: Props) {
  if (ms == null) return <p>—</p>;
  const { years, days, hours, minutes, seconds } = convertMs(ms);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <p className={css.timer}>
      {(mode === "full" || mode === "date") && years > 0 && `${years}р. `}
      {(mode === "full" || mode === "date") && `${days}д. `}
      {(mode === "full" || mode === "clock") && `${pad(hours)}г. `}
      {(mode === "full" || mode === "clock") && `${pad(minutes)}хв. `}
      {(mode === "full" || mode === "clock") && `${pad(seconds)}с.`}
    </p>
  );
}
//////////////////////////////////////
//умовний рендеринг погано працює з перезодом часу через "00"
{
  /* <p className={css.timer}>
  {years > 0 && `${years}р.`}
  {days > 0 && `${days}д.`}
  {hours > 0 && `${pad(hours)}г.`}
  {minutes > 0 && `${pad(minutes)}хв.`}
  {seconds > 0 && `${pad(seconds)}с.`}
</p>; */
}
