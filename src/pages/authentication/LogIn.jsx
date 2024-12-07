import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../config/routeMgt/RoutePaths";
import AuthenticationDetails from "../../components/button/AuthenticationDetails";
import AuthenticationForm from "../../components/button/AuthenticationForm";
import { useEffect, useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../../services/Auth/user-context";
import GoogleAuth from "./Google-Auth";
import { GoArrowUpRight } from "react-icons/go";

const LogIn = () => {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate()
  const {loading:isLoading,token} = useSelector((state) => state.user)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if(token){
      navigate(appRoutes.profile)
    }
  }, [token])
  
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
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
    dispatch(userSignIn(formData))  

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-[#F0F0F0] flex flex-wrap lg:flex-nowrap justify-between items-center px-4 sm:px-10 md:px-20 gap-10 text-sm py-20">
      <AuthenticationDetails />
      <AuthenticationForm>
        <form onSubmit={handleSubmit} className="w-full grid gap-4 ">
          <h1 className="text-[20px] font-bold text-center">Login</h1>
          <p className="text-center font-semibold">
            Welcome back! Please log in to access your account.
          </p>
          <div className="w-full">
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
              className="w-full border border-gray-500 outline-none rounded-md p-3 text-center md:text-start"
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2 w-full relative">
            <label htmlFor="password">
              {!errors.password ? (
                <span>Password</span>
              ) : (
                <span className="my-13 text-[red]">{errors.password}</span>
              )}
            </label>
            <input
              className="border border-gray-500 outline-none rounded-md p-3 text-center md:text-start w-full"
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
          </div>
          <Link
            to={appRoutes.forgot_password}
            className="text-right text-[blue] no-underline "
          >
            Forgot Password?
          </Link>
          {/* <div className="flex items-center">
            <label className="">
              Remember me
              <input type="checkbox" />
            </label>
          </div> */}
          <button
            className="hover:bg-[#17337C] bg-[#3557C2] border-none capitalize text-white font-openSans font-semibold w-full py-3 cursor-pointer disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          {/* <div className="text-center relative py-3">
            <hr className="text-gray-700" />
            <span className="absolute top-1 bg-white px-2">Or</span>
          </div>
          <GoogleAuth isLoading={isLoading}/> */}
          <div className="text-center flex justify-center items-center">
          Don't have an account yet? 
            <Link to={appRoutes.sign_up} className="flex font-semibold no-underline text-black hover:text-[#3557C2] items-center">
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
