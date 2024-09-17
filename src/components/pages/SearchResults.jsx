import image1 from "../../../src/assets/images/image1.png";
import image2 from "../../../src/assets/images/image2.png";
import image3 from "../../../src/assets/images/image3.png";
import Recommend from "./Recommend";
import OtherEvents from "./OtherEvents";
import { useNavigate } from "react-router-dom";
import { FaSliders } from "react-icons/fa6";
import SeaarchHeader from "./seaarchHeader";
import { useEffect, useState } from "react";
import EventCard from "../cards/EventCard";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../../redux/eventsSlice";
import axios from "axios";
import { END_POINT } from "../../config/environment";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const [showFilter, setShowFilter] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("query");

  const dispatch = useDispatch();
  const event = useSelector((state) => state.events.events);
  console.log("events", event);
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  function toEventDesc() {
    navigate("/eventdescription");
  }

  const searchQuery = async () => {
    await axios
      .get(`${END_POINT.BASE_URL1}/event/search?text=${query}`)
      .then((response) => {
        // Handle successful response
        setSearchResults(response.data.events);
        console.log("successfull search", response.data);
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
  };
  const filterHandler = () => {
    setShowFilter((prev) => !prev);
  };
  const o = () => {
    alert("a");
  };
  useEffect(() => {
    searchQuery();
  }, [query]);
  return (
    <div className="overflow-x-hidden">
      <SeaarchHeader onSearch={o} />
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
            {query ? (
              <>
                <center>
                  <h1>Search Results for {query}</h1>
                </center>

                {searchResults?.map((data, index) => {
                  return <EventCard event={data} key={index} />;
                })}
              </>
            ) : (
              event?.map((data, index) => {
                return <EventCard event={data} key={index} />;
              })
            )}
          </div>
        </div>

        <div className="px-[4rem] md:px-0">
          <Recommend />
        </div>
        {/* 
        <div className="px-[4rem] md:px-[1rem]">
          <OtherEvents />
        </div> */}
      </div>
    </div>
  );
}
