import React from 'react'
import styles from './Home.module.scss';



const Home = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Сегодня</h1>


      <div className={styles.gridCards}>
        <div className={styles.card}>Калории</div>
        <div className={styles.card}>БЖУ</div>
        <div className={styles.card}>Рекомендации</div>

      </div>
    </section>
  )
}


export default Home;