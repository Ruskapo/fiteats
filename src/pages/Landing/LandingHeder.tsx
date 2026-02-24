import { Link } from "react-router-dom";
import styles from "./LandingHeader.module.scss";

const LandingHeader = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        FitEats
      </Link>

      <div className={styles.right}>
        <select className={styles.select}>
          <option>RU</option>
          <option>EN</option>
        </select>

        <Link to="/app" className={styles.button}>
          Войти
        </Link>
      </div>
    </header>
  );
};

export default LandingHeader;
