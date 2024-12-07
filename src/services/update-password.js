import toast from "react-hot-toast";
import { END_POINT } from "../config/environment";

export const updatePaswordFn = async (data,token,setIsLoading) => {
  setIsLoading(true)
  toast.loading("Updating Password");
    const formData = new FormData();

    formData.append("oldPassword", data.oldPassword);
    formData.append("password", data.newPassword);
    formData.append("confirmPassword", data.confirmPassword);

    if(token){
      try{
        const request = await fetch(`${END_POINT.BASE_URL}/users/me/update-password`,{
          body:JSON.stringify(data),
          method:"PUT",
          headers:{
            'Content-Type': 'application/json',
            "x-auth-token":token,
          }          
        })
        setIsLoading(false)
          const response = await request.json()
          toast.success(response.message)
      }catch(error){
        toast.error("failed to update password")
        setIsLoading(false)
      }
    }
  };