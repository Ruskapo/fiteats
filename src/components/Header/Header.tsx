import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Link to="/" className={styles.logo}>
          FitEats
        </Link>
      </div>

      <div className={styles.navbar}>
        <NavLink className={styles.link} to="/app">
          Главная
        </NavLink>

        <NavLink className={styles.link} to="/app/recipes">
          Рецепты
        </NavLink>

        <NavLink className={styles.link} to="/app/favorites">
          Избранное
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
