import Link from "next/link";
import css from "./pageNewYear.module.css";
import TimerNewYear from "@/components/TimerNewYear/TimerNewYear";
import ChristmasCanvas from "@/components/NYTree/ChristmasCanvas";

const NewYear = () => {
  return (
    <div className={css.conainer}>
      <div className={css.timer}>
        <Link href="/" className={css.a}>
          Сторінка часу
        </Link>
        <TimerNewYear />
      </div>

      <section className={css.tree}>
        <ChristmasCanvas />
      </section>
    </div>
  );
};

export default NewYear;
