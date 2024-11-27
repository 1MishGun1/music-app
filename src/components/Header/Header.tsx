import { Link, NavLink, useLocation } from "react-router-dom";
import Styles from "./Header.module.css";
import { IPropsStyles } from "../../interfaces/propsStyles";

const setActive = ({ isActive }: IPropsStyles) =>
  isActive ? Styles["item__nav_active"] : Styles["item__nav"];

export const Header = () => {
  const location = useLocation();
  const homeUrl = location.pathname === "/";

  return (
    <header className={Styles["header"]}>
      {homeUrl ? (
        <h1 className={Styles["header__logo"]}>JLS Music</h1>
      ) : (
        <Link to={"/"} className={Styles["header__logo"]}>
          JLS Music
        </Link>
      )}
      <nav className={Styles["nav"]}>
        <ul className={Styles["items__nav"]}>
          <NavLink to={"/add"} className={setActive}>
            Запушить
          </NavLink>
          <NavLink to={"/list"} className={setActive}>
            Песенки
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
