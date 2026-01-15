import  { createContext, useState } from 'react'

export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);


  const toggleFavorite = (id) => {
    const idString = String(id);
    setFavorites((prev) => 
      prev.includes(idString) ? prev.filter((x) => x !== idString) : [...prev, idString]
    );
  }
  return (
    <AppContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  )
}


export default AppProvider;
