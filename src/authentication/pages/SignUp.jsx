import { Link } from "react-router-dom";
import { appRoutes } from "../../config/routeMgt/RoutePaths";
import AuthenticationDetails from "../../components/button/AuthenticationDetails";
import AuthenticationForm from "../../components/button/AuthenticationForm";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoArrowUpRight } from "react-icons/go";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import axios from "axios";
import { END_POINT } from "../../config/environment";

const SignUp = () => {
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    check: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email formart not valid!";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required!";
    } else if (formData.password.length < 8) {
      validationErrors.password =
        "Password must be at least 8 charracters long!";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match!";
    }

    // if (!formData.check.trim()) {
    //   validationErrors.check = "Please agree with our terms of use!";
    // }
    var check = document.getElementById("check");
    console.log(check.ischecked);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("form data", formData);
      await axios
        .post(`${END_POINT.BASE_URL1}/users/signup`, formData)
        .then((response) => {
          // Handle successful response
          alert(response.data.message);
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
      // setFormData({})
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async()=>{
  //   const response = await axios.get(`${END_POINT}`)
  //   console.log(END_POINT)
  // }

  return (
    <div className="bg-[#F0F0F0] flex flex-wrap lg:flex-nowrap justify-between items-center lg:p-10 sm:p-5 gap-10 text-[14px] max-w-7xl mx-auto">
      <AuthenticationDetails />
      <AuthenticationForm>
        <form onSubmit={handleSubmit} className="grid gap-3 w-full">
          <h1 className="text-[20px] font-bold text-center">Sign Up</h1>
          <p className="text-center font-semibold">
            Create an account to unlock exclusive features.
          </p>
          <span className="grid gap-2 w-full">
            <label htmlFor="name">
              {!errors.name && <span>Name</span>}
              {errors.email && (
                <span className="my-13 text-[red]">{errors.name}</span>
              )}
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              className="border border-gray-500 outline-none rounded-md p-3 text-center md:text-start"
              required
              onChange={handleChange}
            />
          </span>
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
          <span className="grid gap-2 w-full relative">
            <label htmlFor="confirm_password">
              {!errors.confirmPassword && <span>Password</span>}
              {errors.confirmPassword && (
                <span className="my-13 text-[red]">
                  {errors.confirmPassword}
                </span>
              )}
            </label>
            <input
              className="border border-gray-500 outline-none rounded-md p-3 text-center md:text-start"
              type={!showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
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
          <div className="flex items-center text-center">
            <input id="check" name="check" type="checkbox" />
            <span>
              I agree with the{" "}
              <span className="no-underline text-[blue]">Terms of Use</span> and{" "}
              <span className="no-underline text-[blue]">Privacy Policy</span>
            </span>
          </div>
          {errors.check && (
            <span className="my-13 text-[red] block">{errors.check}</span>
          )}
          <button
            className="hover:bg-[#17337C] bg-[#3557C2] border-none capitalize text-white font-openSans font-semibold w-full py-3 cursor-pointer"
            type="submit"
          >
            sign up
          </button>
          <div className="text-center relative py-3">
            <hr className="text-gray-700" />
            <span className="absolute top-2 bg-white px-2">Or</span>
          </div>
          <button className="border border-gray-700 text-black capitalize font-openSans font-semibold w-full py-2 flex justify-center items-center gap-2 cursor-pointer bg-[#F7F7F8]">
            <FcGoogle className="text-2xl" />
            <span>Login with Google </span>
          </button>

          <div className="text-center">
            Already have an account?
            <Link
              to={appRoutes.login}
              className="font-semibold no-underline text-black hover:text-[#3557C2]"
            >
              LogIn
              <GoArrowUpRight />
            </Link>
          </div>
        </form>
      </AuthenticationForm>
    </div>
  );
};
export default SignUp;
