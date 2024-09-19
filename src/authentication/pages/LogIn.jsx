import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../config/routeMgt/RoutePaths";
import AuthenticationDetails from "../../components/button/AuthenticationDetails";
import AuthenticationForm from "../../components/button/AuthenticationForm";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { END_POINT } from "../../config/environment";
import axios from "axios";
import { useCookies } from "react-cookie";

const LogIn = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["userCookie"]);

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required!";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email formart not valid!";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required!";
    }
    if (formData.password.length < 8) {
      validationErrors.password = "Password must be longer than 8 charracters!";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      await axios
        .post(`${END_POINT.BASE_URL}/users/login`, formData)
        .then((response) => {
          // Handle successful response
          console.log(response.data.data.user);
          if (response.status === 200) {
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.data.user)
            );
            setCookie("userCookie", JSON.stringify(response.data.token), {
              path: "/",
              maxAge: 28800,
            });
            navigate("/profile");
          }
        })
        .catch((error) => {
          if (error.response) {
            // The request was made but the server responded with an error
            console.error(
              "Error message from backend:",
              error.response.data.message
            );
          } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received:", error.request);
          } else {
            // Something happened in setting up the request that failed
            console.error("Error:", error.message);
          }
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-[#F0F0F0] flex flex-wrap lg:flex-nowrap justify-between items-center lg:p-10 sm:p-5 gap-10 text-[14px] max-w-7xl mx-auto">
      <AuthenticationDetails />
      <AuthenticationForm>
        <form onSubmit={handleSubmit} className="grid gap-3 w-full">
          <h1 className="text-[20px] font-bold text-center">Login</h1>
          <p className="text-center font-semibold">
            Welcome back! Please log in to access your account.
          </p>
          <span className="grid gap-2 w-full">
            <label htmlFor="email">
              {!errors.email && <span>Email</span>}
              {errors.email && (
                <span className="my-13 text-[red]">{errors.email}</span>
              )}
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="border border-gray-500 outline-none rounded-md p-3 text-center md:text-start"
              required
              onChange={handleChange}
            />
          </span>
          <span className="grid gap-2 w-full relative">
            <label htmlFor="password">
              {!errors.password ? (
                <span>Password</span>
              ) : (
                <span className="my-13 text-[red]">{errors.password}</span>
              )}
            </label>
            <input
              className="border border-gray-500 outline-none rounded-md p-3 text-center md:text-start"
              type={!showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              required
              onChange={handleChange}
            />
            <div
              className="absolute right-2 bottom-3 p-1 text-gray-600 text-lg"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {!showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
            </div>
          </span>
          <Link
            to={appRoutes.reset_password}
            className="text-right text-[blue] no-underline"
          >
            Forgot Password?
          </Link>
          <div className="flex items-center">
            <label className="">
              Remember me
              <input type="checkbox" />
            </label>
          </div>
          <button
            className="hover:bg-[#17337C] bg-[#3557C2] border-none capitalize text-white font-openSans font-semibold w-full py-3 cursor-pointer"
            type="submit"
          >
            login
          </button>
          <div className="text-center relative py-3">
            <hr className="text-gray-700" />
            <span className="absolute top-2 bg-white px-2">Or</span>
          </div>
          <button className="bg-[#F7F7F8] border border-gray-700 text-black capitalize font-openSans font-semibold w-full py-2 flex justify-center items-center gap-2 cursor-pointer">
            <FcGoogle className="text-2xl" />
            <span>Login with Google </span>
          </button>

          <div className="text-center">
            Don&apos;t have an account?
            <Link
              to={appRoutes.sign_up}
              className="font-semibold no-underline text-black hover:text-[#3557C2]"
            >
              Sign up
              <GoArrowUpRight />
            </Link>
          </div>
        </form>
      </AuthenticationForm>
    </div>
  );
};

export default LogIn;
