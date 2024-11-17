import { NavLink, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../config/routeMgt/RoutePaths";
import { useRef, useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassord, resetPassord } from "../../services/Auth/user-context";
import toast from "react-hot-toast";

export default function ForgetPassword() {
  const emailRef = useRef()
  const {loading} = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  function submitHandle(e){
    e.preventDefault()
    if(emailRef.current.value){
      dispatch(forgetPassord({email:emailRef.current.value}))
    }
  }
  return (
    <section className="w-[90%] md:w-1/2 mx-auto border rounded-md p-4 my-20 font-poppins max-w-2xl" onSubmit={(e)=>submitHandle(e)}>
        <h1 className="font-bold">Find Your Account</h1>
        <h3 className="text-base sm:text-lg text-gray-600">Please enter your email address to search for your account</h3>
        <form className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="border py-4 px-2 focus:border-[#3557c2] rounded-md outline-none" placeholder="example@gmail.com" required ref={emailRef}/>
          <div className="flex justify-end gap-4">
          <NavLink disabled={loading} to={appRoutes.login} className="bg-gray-600 hover:bg-white text-white border-transparent border hover:border-[#3557c2] hover:text-gray-600 p-4 rounded-md inline disabled:cursor-not-allowed">cancle</NavLink> 
          <button disabled={loading } type="submit" className="disabled:cursor-not-allowed hover:bg-[#3557c2] bg-white text-[#3557c2] hover:text-white p-4 rounded-md capitalize hover:border-transparent border border-[#3557c2]">search</button>
          </div>
        </form>
    </section>
  )
}


export function ResetPassword(){
  const {loading} = useSelector((state)=>state.user)
  const navigate = useNavigate()
  const {token} = useParams();
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch()
  const passwordRef = useRef()
  const conirmPasswordRef = useRef()
   function submitHandle(e){
    e.preventDefault()
    if(!passwordRef.current.value && !conirmPasswordRef.current.value){
     return toast.error("empty input")
    }
    if(passwordRef.current.value !== conirmPasswordRef.current.value){
      return toast.error("password and confirm password not the same")
     }
     const data = {
      userData:{
        password:passwordRef.current.value,
        confirmPassord:conirmPasswordRef.current.value
      },
      token,
      navigate
     }
     dispatch(resetPassord(data))
  }

  return (
    <section className="w-[90%] md:w-1/2 mx-auto border rounded-md p-4 my-20 font-poppins max-w-2xl">
    <h1 className="font-bold capitalize">reset your password</h1>
    <h3 className="text-base sm:text-lg text-gray-600">Please enter a new password</h3>
    <form className="flex flex-col gap-2 relative" onSubmit={submitHandle}>
      <div className="grid gap-3 w-full">
      <label htmlFor="email">Password</label>
      <input ref={passwordRef}  type={!showPassword ? "text" : "password"} id="email" className="border py-4 px-2 focus:border-[#3557c2] rounded-md outline-none bg-transparent bg-white w-full" required/>
      <div className="absolute right-2 top-12 p-1 text-gray-600 text-lg" onClick={() => setShowPassword((prev) => !prev)}>
      {!showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
      </div>
      </div>
      <div className="grid gap-3 w-full relative">
      <label htmlFor="confirm-email">Confirm Password</label>
      <input ref={conirmPasswordRef} type={!showPassword ? "text" : "password"} id="confirm-email" className="border py-4 px-2 focus:border-[#3557c2] rounded-md outline-none w-full" required/>
      <div className="absolute right-2 bottom-3 p-1 text-gray-600 text-lg" onClick={() => setShowPassword((prev) => !prev)}>
      {!showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
      </div>
      </div>
      <div className="flex justify-end gap-4">
      <button disabled={loading} type="submit" className="disabled:cursor-not-allowed hover:bg-[#3557c2] bg-white text-[#3557c2] hover:text-white p-4 rounded-md capitalize hover:border-transparent border border-[#3557c2]">submit</button>
      </div>
    </form>
</section>
  )
}