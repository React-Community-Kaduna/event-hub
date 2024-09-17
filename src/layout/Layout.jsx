import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ isLoggedIn }) => {
  return (
    <div className="w-full flex flex-col ">
      <NavBar isLoggedIn={isLoggedIn} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
