import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import Recipes from "./pages/Recipes/Recipes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="recipe" element={<Recipe />} />
      </Route>
    </Routes>
  );
}

export default App;
