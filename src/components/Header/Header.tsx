import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/app">
        FitEats
      </Link>
      <div className={styles.nav}>
        <Link className={styles.link} to="/app/recipes">
          Рецепты
        </Link>

        <Link className={styles.link} to="/app/favorites">
          Избранное
        </Link>
      </div>
    </header>
  );
};

export default Header;
