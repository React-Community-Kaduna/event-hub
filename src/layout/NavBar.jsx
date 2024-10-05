import { useState } from "react";
import {
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { AppButton } from "../components/button/AppButton";
import styles from "./Layout.module.css";
import { appRoutes } from "../config/routeMgt/RoutePaths";
import logo from "../assets/logo.png";

const NavBar = ({ isLoggedIn }) => {
  const [isActive, setIsActive] = useState("Home");

  // category and search
  const [selectedValue, setSelectedValue] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const logout = () => {};

  return (
    <div className="flex flex-wrap z-20 border-b border-b-gray-200 sticky top-0 bg-white justify-between lg:px-12 md:px-8 px-4 h-auto">
      <div className="flex flex-wrap justify-between w-full">
        <div className="py-5 w-full flex flex-wrap lg:gap-x-20 md:gap-x-16 gap-x-4 gap-y-4 items-center justify-between border-b border-b-gray-300">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[70px]" />
          </Link>

          {/* category search */}
          <div className="hidden sm:block">
            <Box display="flex" alignItems="center">
              {/* <InputLabel id="demo-simple-select-helper-label">Category</InputLabel> */}
              <Select
                IconComponent={() => null}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectedValue}
                onChange={handleSelectChange}
                size="small"
                variant="outlined"
                displayEmpty
                sx={{
                  mr: 0,
                  bgcolor: "var(--app-blue)",
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                  color: "white",
                }}
                label="Category"
                name={"Category"}
                className={styles.navCategorySelect}
              >
                <MenuItem value="" disabled>
                  Category
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
              <TextField
                value={searchText}
                onChange={handleSearchChange}
                variant="standard"
                placeholder="Search Events Here"
                className={styles.navSearch}
                sx={{ ml: 4, pl: 4, width: "auto" }}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon
                        htmlColor="var(--app-blue)"
                        className="cursor-pointer"
                      />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
            </Box>
          </div>

          {/* sign up & login */}
          {isLoggedIn ? (
            <div className="min-w-[120px] flex items-center justify-between gap-4">
              <div className="profileImage bg-gray-300 border w-[50px] h-[50px] rounded-full">
                <Link to={appRoutes.profile}>Profile</Link>
              </div>

              <AppButton
                handleClick={logout}
                label="Logout"
                containerStyle="min-w-[70px]"
              />
            </div>
          ) : (
            <div className="min-w-[120px] flex items-center justify-between gap-4">
              <Link to={appRoutes.sign_up}>
                <AppButton
                  variant="text"
                  label="Sign Up"
                  containerStyle="whitespace-nowrap min-w-[70px]"
                />
              </Link>
              <Link to={appRoutes.login}>
                <AppButton label="Login" containerStyle="min-w-[70px]" />
              </Link>
            </div>
          )}
        </div>

        {/* main nav area for large sreens*/}
        <div className="hidden lg:flex md:flex w-full relative justify-center">
          <nav className="flex gap-4 justify-between">
            <Link
              className={`${
                isActive === "Home"
                  ? "text-[var(--app-blue)] border-t-[var(--app-blue)]"
                  : ""
              }  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5`}
              onClick={() => {
                setIsActive("Home");
              }}
              to={appRoutes.home}
            >
              Home
            </Link>
            <Link
              className={`${
                isActive === "Find Events"
                  ? "text-[var(--app-blue)] border-t-[var(--app-blue)]"
                  : ""
              }  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5`}
              onClick={() => {
                setIsActive("Find Events");
              }}
              to={appRoutes.search}
            >
              Find Events
            </Link>
            <Link
              className={`${
                isActive === "Create Events"
                  ? "text-[var(--app-blue)] border-t-[var(--app-blue)]"
                  : ""
              }  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5`}
              onClick={() => {
                setIsActive("Create Events");
              }}
              to={appRoutes.create_Event}
            >
              Create Events
            </Link>
            <Link
              className={`${
                isActive === "Help Center"
                  ? "text-[var(--app-blue)] border-t-[var(--app-blue)]"
                  : ""
              }  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5`}
              onClick={() => {
                setIsActive("Help Center");
              }}
              to={appRoutes.helpCenter}
            >
              Help Center
            </Link>
            <Link
              className={`${
                isActive === "About Us"
                  ? "text-[var(--app-blue)] border-t-[var(--app-blue)]"
                  : ""
              }  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5`}
              onClick={() => {
                setIsActive("About Us");
              }}
              to={appRoutes.aboutUs}
            >
              About Us
            </Link>
            <Link
              className={`${
                isActive === "Contact Us"
                  ? "text-[var(--app-blue)] border-t-[var(--app-blue)]"
                  : ""
              }  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold px-1 lg:px-5 md:px-3 py-5`}
              onClick={() => {
                setIsActive("Contact Us");
              }}
              to={appRoutes.contactUs}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* main nav for mobile screens (smartphone and tab) */}
        <div className="flex lg:hidden md:hidden items-center justify-items-center justify-center gap-4 w-full py-5">
          <Link to={appRoutes.home}>
            <AppButton variant="transparent" label="Home" />
          </Link>
          <NavLink to={appRoutes.search}>
            <AppButton variant="transparent" label="Find Events" />
          </NavLink>

          <NavLink to={appRoutes.create_Event}>
            <AppButton
              variant="transparent"
              label="Create Event +"
              containerStyle="border-black"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
