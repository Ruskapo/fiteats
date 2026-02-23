import { Link } from "react-router-dom";
import styles from "./LandingHeader.module.scss";


const LandingHeader = () => {
  return (
    <header style={styles.headerStyle}>
      <Link to="/" style={styles.logoStyle}>
        FitEats
      </Link>

      <div style={styles.rightStyle}>
        <select style={styles.selectStyle}>

          <option>RU</option>
          <option>EN</option>
        </select>

        <Link to="/app" style={styles.buttonStyle}>
          Войти
        </Link>
      </div>
    </header>
  );
};

export default LandingHeader;