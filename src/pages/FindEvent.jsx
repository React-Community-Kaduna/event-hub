import { useLoaderData, useNavigation } from "react-router-dom";
import EventCard from "../components/cards/EventCard";
import { Skeleton } from "@mui/material";

export default function FindEvent(){
    const loaderData = useLoaderData()
    const {state} = useNavigation()
    
    let placeholder = new Array(15).fill(0)
    return <>
     {state === "loading" && <div className="mt-[2rem] flex flex-wrap justify-between gap-[2rem] md:gap-[1rem] sm:gap-0 px-20">
       {placeholder.map((_,index)=>{
        return  <Skeleton variant="rectangular" width={380} height={200} key={index} />
       })}
      </div>}
    <div className="my-20 px-4 md:px-20">
        <div className="md:px-12 flex gap-[2rem]">
         <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0 mx-auto">
            <>
            {loaderData?.message && state !== "loading" ? <h2 className="px-7">No such event at the moment try searching for other event</h2> : 
            <>
              {state == "idle" && loaderData?.events.map((data, index) => {
              return (
                <EventCard event={data} key={index} />
              )
            })}
            </>
            }
            </>
          </div>
      </div>
    </div>
    </>
}