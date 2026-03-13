import { motion } from "motion/react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <motion.div
        className={styles.top}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className={styles.logo}>
          FitEats
        </Link>
      </motion.div>

      <motion.div
        className={styles.navbar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <NavLink
          to="/app"
          end
          className={
            ({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link // Подсветка выбранной страницы
          }
        >
          Главная
        </NavLink>

        <NavLink
          to="/app/recipes"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Рецепты
        </NavLink>

        <NavLink
          to="/app/favorites"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Избранное
        </NavLink>
      </motion.div>
    </header>
  );
};

export default Header;
