import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to="/">FitEats</NavLink>
      {"|"}
       <NavLink to="recipes">Рецепты</NavLink>
      {"|"}
       <NavLink to="favorites">Избранное</NavLink>
      {"|"}
    </header>
  )
}


export default Header;