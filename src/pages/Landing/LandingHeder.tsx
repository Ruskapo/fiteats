import { motion } from "motion/react";
import { Link } from "react-router-dom";
import styles from "./LandingHeader.module.scss";

const LandingHeader = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, delay: 0.15, ease: "easeOut" }}
      >
        <Link to="/" className={styles.logo}>
          FitEats
        </Link>
      </motion.div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, delay: 0.25, ease: "easeOut" }}
      >
        <select className={styles.select}>
          <option>RU</option>
          <option>EN</option>
        </select>

        <motion.div
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/app" className={styles.button}>
            Войти
          </Link>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default LandingHeader;
