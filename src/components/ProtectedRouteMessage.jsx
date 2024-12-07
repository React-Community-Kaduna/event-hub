import { Link } from "react-router-dom";
import Modal from "./Modal";
import { appRoutes } from "../config/routeMgt/RoutePaths";

function ProtectedRouteMessage() {
  return (
   <Modal>
     <div className="bg-white px-4 w-11/12 text-start md:w-1/2 py-10 flex flex-col gap-6 rounded-lg">
      <div className="grid gap-3">
        <h1 className="md:text-center text-xl md:text-[1.5rem] font-normal">
          You are not authorized to access this page.
        </h1>
        <p>To access this feature, please ensure you're logged in with an authorized account. If you're having trouble, <br/> feel free to reach out to our support team.</p>
        <div className="flex flex-col gap-4 items-center justify-evenly md:justify-center md:gap-3 my-4 w-full">
        <Link className="bg-[#3557c2] text-center capitalize py-2 px-2 md:py-4 rounded-md text-white w-full" to={appRoutes.home} >Home</Link>   
        <Link className="bg-[#3557c2] text-center capitalize py-2 md:py-4 px-2 rounded-md text-white w-full" to={appRoutes.login} >sign in</Link>
        </div>
      </div>
    </div>
   </Modal>
  );
}

export default ProtectedRouteMessage