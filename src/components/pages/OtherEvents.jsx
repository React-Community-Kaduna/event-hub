import { useSelector } from "react-redux";
import EventCard from "../cards/EventCard";

export default function OtherEvents() {
  const {events} = useSelector((state) => state.events);
  if(events.length <= 0) return
  let otherEventsData = events.slice(0, 3);

  return (
    <div className="lg:px-12 md:px-8 px-4 my-16">
      <h2 className="text-[24px] lg:text-[32px] md:text[28px] font-[700] font-montserrat text-[#2D2C3C]">
        Explore Categories
      </h2>
      <div className="mt-[2rem] flex flex-wrap justify-center lg:gap-[2rem] md:gap-[1rem] gap-4">
        {otherEventsData?.map((data, index) => {
          return (
            <EventCard event={data} key={index} />
          );
        })}
      </div>
    </div>
  )
}
