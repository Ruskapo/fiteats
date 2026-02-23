import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Landing.module.scss';


const Landing = () => {
  return (
    <section>
  <div>
    <h1>Твой рацион под контролем</h1>
    <p>Считай калории, БЖУ и планируй питание просто и красиво.</p>
    <Link to="/app">Начать</Link>
  </div>

  <div>
    <img src={styles.heroImage} alt="FitEats app" />
  </div>
</section>
  )
}

export default Landing