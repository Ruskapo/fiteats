import React from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchRecipes } from "../../redux/slices/recipesSlice";
import Header from "../Header/Header";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.recipes.status);
  const todayItems = useAppSelector((state) => state.today.items);

  React.useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecipes());
    }
  }, [status, dispatch]);

  React.useEffect(() => {
    localStorage.setItem("today-items", JSON.stringify(todayItems));
  }, [todayItems]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
