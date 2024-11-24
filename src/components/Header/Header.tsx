import { Link, useLocation } from "react-router-dom";
import Styles from "./Header.module.css";

export const Header = () => {
  const location = useLocation();
  const homeUrl = location.pathname === "/";

  return (
    <header className={Styles["header"]}>
      {homeUrl ? (
        <h1 className={Styles["header__logo"]}>Music App 🤘</h1>
      ) : (
        <Link to={"/"} className={Styles["header__logo"]}>
          Music App 🤘
        </Link>
      )}
      <nav className={Styles["nav"]}>
        <ul className={Styles["items__nav"]}>
          <Link to={"/add"} className={Styles["item__nav"]}>
            Запушить
          </Link>
          <Link to={"/list"} className={Styles["item__nav"]}>
            Песенки
          </Link>
        </ul>
      </nav>
    </header>
  );
};
