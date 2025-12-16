import css from "./page.module.css";
import Countdown from "../components/Countdown/Countdown";
import Link from "next/link";

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Сторінка часу</h1>

      <Countdown />

      <Link href="/NewYear" className={css.a}>
        NewYear
      </Link>
    </div>
  );
}
