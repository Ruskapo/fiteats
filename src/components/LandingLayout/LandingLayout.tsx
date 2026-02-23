import { Outlet } from "react-router-dom";
import LandingHeader from "../../pages/Landing/LandingHeder";

const LandingLayout = () => {
  return (
    <>
     <LandingHeader />
       <main>
        <Outlet />
       </main>
     </>
  );
};

export default LandingLayout;
    