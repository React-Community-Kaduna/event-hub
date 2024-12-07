import coverimage from "../../../src/assets/images/coverImage.jpeg";
import { IoSearch } from "react-icons/io5";
import { END_POINT } from "../../config/environment";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function SeaarchHeader({searchHandler}) {
  const ref = useRef()
  async function searchForEventHandler(){
    const value = ref.current.value
    try {
      const request = await fetch(`${END_POINT.BASE_URL}/event/search?text=${value}`)
      if(request.status !== 200){
       throw new Error("error while trying to send request") 
      }
      const data = await request.json() 
      console.log(data)
      searchHandler(data)
    } catch (error) {
      toast.error("Failed to search for event")
    }
  }
  
  return (
    <div className="relative">
      <div className="w-[100vw] h-[300px] md:h-[300px] relative">
        <img src={coverimage} alt="background image" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(53,87,194,0.9)] to-[rgba(53,87,194,0.9)] via-[rgba(45,44,60,0.9)20%]"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-1/2 grid gap-5">
        <h1 className="text-white text-center text-base md:text-2xl font-[700] font-montserrat">
          Explore a world of events. Find what excites you!
        </h1>
        <form className="flex w-full justify-center flex-col sm:flex-row gap-2" onSubmit={(e)=>{
            e.preventDefault()
          searchForEventHandler()
        }}>
          <div className="relative flex w-full">
            <input
            ref={ref}
              type="search"
              placeholder="Search for events"
              className="w-full  py-3 pl-12 rounded-md focus:outline-none text-base md:text-lg focus:border-[#3557c2] border-2 outline-none"
            />
            <IoSearch className="absolute text-gray-400 left-3 sm:top-1 -top-0 mt-[0.7rem] md:mt-[0.9rem]  text-[1.6rem] sm:text-[1.2rem] md:text-xl" />
          </div>
          <button className="py-3 rounded-md hover:bg-white capitalize hover:text-[#3557c2] bg-[#3557c2] text-white sm:px-10">search</button>
        </form>
      </div>
    </div>
  );
}
