import { appRoutes } from "../../config/routeMgt/RoutePaths";
import AuthenticationDetails from "../../components/button/AuthenticationDetails";
import AuthenticationForm from "../../components/button/AuthenticationForm"
import { useEffect, useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { userSignUp } from "../../services/Auth/user-context";
import GoogleAuth from "./Google-Auth";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";


const SignUp = () => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({})
  const {loading:isLoading,token} = useSelector((state) => state.user)

  const navigate = useNavigate()
  
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    check: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const {confirmPassword,email,fullName,password} = formData
    const validationErrors = {};
    if (!formData.fullName.trim()) {
      validationErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required!"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email formart not valid!"
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required!"
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 charracters long!"
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match!"
    }

    setErrors(validationErrors)

    // if (Object.keys(validationErrors).length === 0) {
    //   alert("Form Submitted Successfuly")
    //   setFormData({})
    // }  
    
    dispatch(userSignUp({confirmPassword,email,fullName,password}))
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  useEffect(() => {
    if(token){
      navigate(appRoutes.profile)
    }
  }, [token])

  return (
    <div className="bg-[#F0F0F0] flex flex-wrap lg:flex-nowrap justify-between items-center px-4 sm:px-10 md:px-20 gap-10 text-sm py-20">
      <AuthenticationDetails />
      <AuthenticationForm>
      <form onSubmit={handleSubmit} className="grid gap-3 w-full">
          <h1 className="text-[20px] font-bold text-center">Sign Up</h1>
          <p className="text-center font-semibold">
          Create an account to unlock exclusive features.
          </p>
          <span className="grid gap-2 w-full">
            <label htmlFor="fullName">
              {!errors.name && <span>fullName</span>}
              {errors.email && (
                <span className="my-13 text-[red]">{errors.name}</span>
              )}
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Fullname"
              className="w-full border border-gray-500 outline-none rounded-md p-3 text-center md:text-start"
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
              className="w-full border border-gray-500 outline-none rounded-md p-3 text-center md:text-start"
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
              className="w-full border border-gray-500 outline-none rounded-md p-3 text-center md:text-start"
              type={!showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              required
              onChange={handleChange}
            />
            <div
            className="absolute right-2 bottom-3 p-1 text-gray-600 text-lg"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {!showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
            </div>
          </span>
          <span className="grid gap-2 w-full relative">
            <label htmlFor="confirmPassword">
              {!errors.confirmPassword && <span>Password</span>}
              {errors.confirmPassword  && <span className="my-13 text-[red]">{errors.confirmPassword}</span>}
            </label>
            <input
              className="w-full border border-gray-500 outline-none rounded-md p-3 text-center md:text-start"
              type={!showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              required
              onChange={handleChange}
            />
            <div
               className="absolute right-2 bottom-3 p-1 text-gray-600 text-lg"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {!showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
            </div>
          </span>
          <button
            className="hover:bg-[#17337C] bg-[#3557C2] border-none capitalize text-white font-openSans font-semibold w-full py-3 cursor-pointer disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoading}
          >
            sign up
          </button>
          {/* <div className="text-center relative py-3">
            <hr className="text-gray-700"/>
            <span className="absolute top-2 bg-white px-2">Or</span>
          </div>
            <GoogleAuth/> */}
           <div className="text-center flex justify-center items-center">
          Already have an account?
            <Link to={appRoutes.login} className="flex font-semibold no-underline text-black hover:text-[#3557C2] items-center">
            LogIn
                <GoArrowUpRight />
            </Link>
          </div>
        </form>
      </AuthenticationForm>
    </div>
  )
}
export default SignUp