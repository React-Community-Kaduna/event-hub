import { jwtDecode } from "jwt-decode"
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";

function GoogleAuth ({isLoading}){
  const login = useGoogleLogin({
    onSuccess: codeResponse =>{
      //const credential = jwtDecode(codeResponse.credential)      
      console.log(codeResponse);
    },
    onError:()=>{
      console.log("login failed")
    },
    flow: 'auth-code',
  });

  return <button type="button" onClick={login} className="bg-[#F7F7F8] border border-gray-700 text-black capitalize font-openSans font-semibold w-full py-2 flex justify-center items-center gap-2 cursor-pointer disabled:cursor-not-allowed" disabled={isLoading}>
  <FcGoogle className="text-2xl" />
  <span>Login with Google </span>
</button>
}
 export default GoogleAuth;
