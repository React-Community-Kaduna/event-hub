import { Routes, Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { END_POINT } from "../environment";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // ... your authentication logic here

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies] = useCookies(["userCookie"]);
  // const token = localStorage.getItem("token");
  const token = cookies?.userCookie;

  const checkAuth = async () => {
    console.log("token", token);

    if (token) {
      // Verify token on the backend
      var myHeaders = new Headers();
      myHeaders.append("x-auth-token", token);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      await fetch(
        `${END_POINT.BASE_URL1}/users/isAuthenticated`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.message === "success") {
            console.log("status success", result.message);
            setIsLoggedIn(true);
          } else {
            console.log("error", result.msg);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  useEffect(() => {
    checkAuth();
    console.log("isloggin", isLoggedIn);
  }, [token]);

  return (
    <Routes>
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;
