import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">FitEats</Link>
      {"|"}
       <Link to="recipes">Рецепты</Link>
      {"|"}
       <Link to="favorites">Избранное</Link>
      {"|"}
    </header>
  )
}


export default Header;