import image1 from "../../../src/assets/images/image1.png";
import image2 from "../../../src/assets/images/image2.png";
import image3 from "../../../src/assets/images/image3.png";
import Recommend from "./Recommend";
import OtherEvents from "./OtherEvents";
import { useNavigate } from "react-router-dom";
import { FaSliders } from "react-icons/fa6";
import SeaarchHeader from "./seaarchHeader";
import { useState } from "react";
import EventCard from "../cards/EventCard";
import Filter from "./Filter";
import { useSelector } from "react-redux";
import coverimage from "../../../src/assets/images/coverImage.jpeg";
import { IoSearch } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
export default function SearchResults() {
  const [showFilter, setShowFilter] = useState(false);
  const events = useSelector((state) => state.event.allEvents);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  console.log("ents", events);

  const filteredEvents = events?.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!dateFilter || event.date === dateFilter)
  );

  const filterHandler = () => {
    setShowFilter((prev) => !prev);
  };
  return (
    <div className="overflow-x-hidden">
      {/* <SeaarchHeader /> */}
      <div className="relative">
        <div className="w-[100vw] h-[300px] md:h-[300px] relative">
          <img
            src={coverimage}
            alt="background image"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(53,87,194,0.9)] to-[rgba(53,87,194,0.9)] via-[rgba(45,44,60,0.9)20%]"></div>
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 grid gap-5">
          <h1 className="text-white text-center text-base md:text-2xl font-[700] font-montserrat">
            Explore a world of events. Find what excites you!
          </h1>
          <div className="flex w-full justify-center min-w-[350px] max-[367px]:flex-col">
            <div className="relative flex w-3/5 max-[367px]:w-full max-[367px]:mb-2">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
                placeholder="Search for events"
                className="w-full sm:py-1 py-2 rounded-tl-[5px] rounded-bl-[5px] pl-9 pr-[3rem] max-[367px]:rounded text-base focus:outline-none"
              />
              <IoSearch className="absolute text-gray-400 left-3 -top-1 mt-[0.7rem] md:mt-[0.9rem]  text-[1.6rem] sm:text-[1.2rem]" />
            </div>
            <div className="relative max-[367px]:border-none border-gray-300 border-l-[0.5px] text-[#5A5A5A] w-2/5 max-[367px]:w-full">
              <SlLocationPin className="absolute top-2 sm:top-3 left-4 text-[1.5rem] sm:text-[1.2rem]" />
              <select
                name=""
                id=""
                className="focus:outline-none rounded-tr-[5px] rounded-br-[5px] appearance-none w-full pl-10 py-3 sm:py-[9px] text-sm sm:text-base max-[367px]:rounded"
              >
                <option value=""> Places in Kd</option>
              </select>
              <div className="absolute right-3 top-[1.1rem] pointer-events-none">
                <IoIosArrowDown className="text-[1.1rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-20">
        <div className="px-[1.5rem] mt-[2rem] text-[#2D2C3C]">
          <h1 className="text-[1.3rem] flex items-center gap-[0.5rem]">
            Filter{" "}
            <FaSliders
              className="text-[1.3rem] md:hidden"
              onClick={filterHandler}
            />
          </h1>
        </div>
        <div className="md:px-12 flex gap-[2rem]">
          <Filter showFilter={showFilter} />
          <div className="h-[130vh] border-[0.1px] border-[#d1d5db] md:hidden"></div>

          <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
            {filteredEvents?.map((data, index) => {
              return <EventCard event={data} key={index} />;
            })}
          </div>
        </div>

        <div className="px-[4rem] md:px-0">
          <Recommend />
        </div>
      </div>
    </div>
  );
}
