import  { useState } from 'react'

const AppContext = () => {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((itemId) => itemId !== id));
    
    } else {
      setFavorites([...favorites, id]);
    }
  }
  return (
    <div>AppContext</div>
  )
}


export default AppContext;
