import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { appRoutes } from "../../config/routeMgt/RoutePaths";
import EventCard from "../../components/cards/EventCard";
import { useSelector } from "react-redux";
import Message from "../../components/Message";
import { Skeleton } from "@mui/material";

export default function EventList (){
  const {events,loading } = useSelector((state) => state.events);

  if(events === "NetworkError when attempting to fetch resource."){
    console.log("error")
    return  <div className="my-24">
    <div className="mx-auto w-4/5 md:w-3/4 bg-white flex flex-col justify-center items-center text-center gap-4 text-2xl font-openSans leading-10">
    <h2>You are currently offline or experiencing a poor network connection. Try connecting to Wi-Fi and reloading the page</h2>
    </div>
    </div>
  }
    const navigation = useNavigation()
    let placeholder = new Array(15).fill(0)
    return (
        <>
        {events.length === 0 && !loading && <Message />}
      {loading && <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
       {placeholder.map((_,index)=>{
        return  <Skeleton variant="rectangular" width={380} height={200} key={index} />
       })}
      </div>}
     
        {events.length>0 &&   <>
          <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
            {events?.length !==0  && <>
            {events?.map((data, index) => {
              return <EventCard event={data} key={index} />;
            })}
            </>}
          </div>
          {events?.length > 0 && <div className="flex flex-wrap justify-center">
          <Link to={appRoutes.search} className="bg-[#3557C2] text-center  py-[0.5rem] rounded-[5px] text-white mx-auto w-4/5 sm:w-[400px]">
            See More
          </Link>
          </div>}
       {events?.length > 0 &&  <div className="mt-[5rem] mb-[5rem] lg:px-12 md:px-8 px-4">
          <div className="flex items-center gap-[13rem]">
            <h2 className="text-[24px] lg:text-[32px] md:text[28px] font-[700] font-montserrat text-[#2D2C3C]">
              Popular Events
            </h2>
          </div>
          <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
            {events?.map((data, index) => {
              return <EventCard event={data} key={index} />;
            })}
          </div>
          <div className="flex flex-wrap justify-center">
          <Link to={appRoutes.search} className="bg-[#3557C2] text-center  py-[0.5rem] rounded-[5px] text-white mx-auto w-4/5 sm:w-[400px]">
            See More
          </Link>
          </div>
        </div>}
    </>}
        </>
    )
  
}