import { Link } from "react-router-dom";
import Styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <section className={Styles["home"]}>
      <h1 className={Styles["slogan"]}>Пошумим?</h1>
      <Link to={"/add"} className={Styles["btn__download"]}>
        Запушить
      </Link>
    </section>
  );
};
