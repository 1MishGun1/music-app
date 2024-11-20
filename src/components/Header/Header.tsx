import Styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={Styles["header"]}>
      <h1>Music App 🤘</h1>
      <nav className={Styles["nav"]}>
        <ul className="items__nav">
          <li>Запушить</li>
          <li>Чек лист песенок</li>
        </ul>
      </nav>
    </header>
  );
};
