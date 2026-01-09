import  { createContext, useState } from 'react'

export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);


  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((itemId) => itemId !== id));
    
    } else {
      setFavorites([...favorites, id]);
    }
  }
  return (
    <AppContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  )
}


export default AppProvider;
