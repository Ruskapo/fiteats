import React from 'react'
import styles from './Home.module.scss';
import Card from '../../components/Card/Card';

const cards = [
  {id: 1, title: 'Калории'},
  {id: 2, title: 'БЖУ'},
  {id: 3, title: 'Рекомендации'},
];


const Home = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Сегодня</h1>


      <div className={styles.gridCards}>
        {cards.map((item) => (
          <Card key={item.id} title={item.title} />
        ))}

      </div>
    </section>
  )
}


export default Home;