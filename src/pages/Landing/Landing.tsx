import { motion } from "motion/react";
import { Link } from "react-router-dom";
import hero from "../../assets/Landing/hero.jpg";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.left}
        // Анимированные стили
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className={styles.title}>
          Вы уникальны. Ваш путь к похудению тоже.
        </h1>
        <p className={styles.subtitle}>
          Похудение — это не всегда просто. Найти, что работает, сохранить
          мотивацию и увидеть прогресс — нелегко.Считай калории, БЖУ и планируй
          питание просто и красиво.
        </p>
        <motion.div
          whileHover={{ y: -4, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          <Link to="/app" className={styles.cta}>
            Начать <span className={styles.arrow}>→</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.right}
        // Анимированные стили
        initial={{ opacity: 0, x: 60, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <motion.img
          src={hero}
          className={styles.image}
          alt="FitEats app"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Landing;
