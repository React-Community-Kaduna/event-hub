import { useRef } from "react";
import { Box } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { appRoutes } from "../../config/routeMgt/RoutePaths";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logUserOut } from "../../services/Auth/user-context";
import avatar_placeholder from "../../assets/avatar.png"

const NavBar = () => {
  const {token,user} = useSelector((state) => state?.user);
  const navigate = useNavigate()
  const searchRef = useRef("");
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/event/${searchRef?.current?.value}`)
  };

  function handleLogOut(){
    dispatch(logUserOut())
  }

  return (
   <>
    <div className="font-Montserrat flex flex-wrap z-20 border-b border-b-gray-200 sticky top-0 bg-white justify-between lg:px-12 md:px-8 px-4 h-auto">
      <div className="flex flex-wrap justify-between w-full">
        <div className="py-5 w-full flex flex-wrap items-center justify-between border-b border-b-gray-300 lg:grid lg:grid-cols-[.5fr_1fr_.5fr]">
          <Link to="/" className="w-fit" >
            <img src={logo} alt="Logo" className="w-[70px]" />
          </Link>

          {/* category search */}
          <form className="hidden sm:block" onSubmit={(e)=>handleSearch(e)}>
            <Box display="flex" alignItems="center">
              <input
              ref={searchRef}
                style={{borderBottom:"1px solid #3557c2",paddingLeft:"10px"}}
                variant="standard"
                placeholder="Search Events Here"
                className="outline-none border-none focus:border-[#3357c2] border w-full pl-2 py-2 caret-[#3357c2] focus:outline-none"
                size="small"
              />
               <SearchIcon htmlColor="var(--app-blue)" className="cursor-pointer" />
            </Box>
          </form>

          {/* sign up & login */}
          <div className="w-fit grid place-self-end">
          {token !== null ? (
            <div className="flex items-center justify-between gap-4">
            <button className="border text-[#3557c2] border-[#3557c2] capitalize py-1 px-2 rounded-md hover:text-white hover:bg-[#3557c2] hover:border-transparent" onClick={handleLogOut}>sign out</button>
            <Link to="/profile" className="profileImage bg-gray-300 border w-[50px] h-[50px] rounded-full">
                {user?.avartar && <img src={user?.avatar} alt="user avatar" className="w-full h-full rounded-full object-cover" />}
                {!user?.avartar && <img src={avatar_placeholder} alt="user avatar" className="w-full h-full rounded-full object-cover" />}
            </Link>
            </div>
          ) : (
            <div className="min-w-[120px] flex items-center justify-between gap-4 auth capitalize">
              <NavLink to={appRoutes.sign_up} className="border border-[#3557c2] py-2 text-[#3557c2] rounded-md px-4  hover:bg-[#3557c2] hover:text-white">
                sign up
              </NavLink>
              <NavLink to={appRoutes.login} className="border border-[#3557c2] py-2 text-[#3557c2] rounded-md px-4 hover:bg-[#3557c2] hover:text-white hover:w-fit">
                login
              </NavLink>
            </div>
          )}
        </div>
          </div>
        
        {/* main nav area for large sreens*/}
        <div className="hidden lg:flex md:flex w-full relative justify-center">
          <nav className="flex gap-4 justify-between large">
            <NavLink
              className="border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5"
              to={appRoutes.home}
            >
              Home
            </NavLink>
            <NavLink 
              className="border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5"
              to={appRoutes.search}
            >
              Find Events
            </NavLink>
            <NavLink
              className="border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5"
              to={appRoutes.create_Event}
            >
              Create Events
            </NavLink>
            <NavLink
               className="border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5"
              to={appRoutes.helpCenter}
              >
              Help Center
            </NavLink>
            <NavLink
               className="border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5"
              to={appRoutes.aboutUs}
              >
              About Us
            </NavLink>
            <NavLink
               className="border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5"
              to={appRoutes.contactUs}
            >
              Contact Us
            </NavLink>
          </nav>
        </div>

        {/* main nav for mobile screens (smartphone and tab) */}
        <div className="flex lg:hidden md:hidden items-stretch justify-evenly w-full py-5 mobile text-center gap-3">        
          <NavLink to={appRoutes.home} className="grid place-content-center text-base border capitalize text-[#3557C2] px-2 py-1 rounded-lg border-[#3557C2]">
          {/* <AppButton variant="transparent" label="Home"/> */}
        home
          </NavLink>
          <NavLink to={appRoutes.search}  className="grid place-content-center text-base border capitalize text-[#3557C2] px-2 py-1 rounded-lg border-[#3557C2] self-center">
          Find events
          </NavLink>
    
         <NavLink to={appRoutes.create_Event}  className="grid place-content-center text-base border capitalize text-[#3557C2] px-2 py-1 rounded-lg border-[#3557C2]">
          create event +
         </NavLink>
        </div>
      </div>
    </div>
   </>
  );
};

export default NavBar;
