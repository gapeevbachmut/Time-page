import css from "./page.module.css";
import Countdown from "../components/Countdown/Countdown";

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Сторінка часу</h1>

      <Countdown />
    </div>
  );
}
