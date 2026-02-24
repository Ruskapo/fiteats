import { Link } from "react-router-dom";
import hero from "../../assets/Landing/hero.jpg";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Вы уникальны. Ваш путь к похудению тоже.
        </h1>
        <p className={styles.subtitle}>
          Похудение — это не всегда просто. Найти, что работает, сохранить
          мотивацию и увидеть прогресс — нелегко.Считай калории, БЖУ и планируй
          питание просто и красиво.
        </p>
        <Link to="/app" className={styles.cta}>
          Начать
        </Link>
      </div>

      <div className={styles.right}>
        <img src={hero} className={styles.image} alt="FitEats app" />
      </div>
    </section>
  );
};

export default Landing;
