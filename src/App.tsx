import { Route, Routes } from "react-router-dom";
import LandingLayout from "./components/LandingLayout/LandingLayout";
import Layout from "./components/Layout/Layout";
import Favorites from "./pages/Favorites/Favorites";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import Recipes from "./pages/Recipes/Recipes";

function App() {
  return (
   <Routes>
  <Route path="/" element={<LandingLayout />}>
    <Route index element={<Landing />} />
  </Route>

  <Route path="/app" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="recipes" element={<Recipes />} />
    <Route path="favorites" element={<Favorites />} />
    <Route path="recipe/:id" element={<Recipe />} />
  </Route>
</Routes>
  );
}

export default App;
