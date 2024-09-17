import { useEffect, useState } from "react";
import tech from "../../../src/assets/images/tech.png";
import cultural from "../../../src/assets/images/cultural.png";
import education from "../../../src/assets/images/education.png";
import entertainment from "../../../src/assets/images/entertainment.png";
import field from "../../../src/assets/images/field.png";
import governmental from "../../../src/assets/images/governmental.png";
import Recommend from "../../components/pages/Recommend";
import OtherEvents from "../../components/pages/OtherEvents";
import EventCard from "../../components/cards/EventCard";
import { FaSliders } from "react-icons/fa6";
import axios from "axios";
import { END_POINT } from "../../config/environment";

const categoriesData = [
  { name: "Technology & Innovation", image: tech },
  { name: "Entertainment", image: entertainment },
  { name: "Educational & Business", image: education },
  { name: "Cultural & Arts", image: cultural },
  { name: "Governmental", image: governmental },
  { name: "Sports & Fitness", image: field },
];

export default function Home() {
  const [searchEvent, setSearchEvent] = useState("Google Dev Fest");
  const [placeValue, setPlaceValue] = useState("KadaHive");
  const [timeValue, setTimeValue] = useState("Any Date");

  const [events, setEvents] = useState([]);

  // const fetchEvents = async () => {
  //   const token =
  //     "eycJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM3MTg5NTY0ZDRkZDJiZjg5NWQzNDYiLCJpYXQiOjE3MjYyNzQyMjEsImV4cCI6MTcyODg2NjIyMX0.If99rA1BFIbZkDY1_7bmCHhIgPXfkczNfljuDx3tPho";

  //   try {
  //     const response = await axios.get(`http://localhost:4000/api/event/all`, {
  //       headers: {
  //         "x-auth-token": token,
  //       },
  //     });
  //     setEvents(response.data.events);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const fetchedEvents = async () => {
    var myHeaders = new Headers();
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM3MTg5NTY0ZDRkZDJiZjg5NWQzNDYiLCJpYXQiOjE3MjYyNzQyMjEsImV4cCI6MTcyODg2NjIyMX0.If99rA1BFIbZkDY1_7bmCHhIgPXfkczNfljuDx3tPho";

    myHeaders.append("x-auth-token", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    await fetch(`${END_POINT.BASE_URL1}/event/all`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          setEvents(result.events);
        } else {
          console.log("error", result.msg);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  console.log("events", events);

  useEffect(() => {
    const storedValue = localStorage.getItem("searchEvent");
    if (storedValue) {
      setSearchEvent(storedValue);
    }
    // fetchEvents();
    fetchedEvents();
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("placeValue");
    if (storedValue) {
      setPlaceValue(storedValue);
    }
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("timeValue");
    if (storedValue) {
      setTimeValue(storedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchEvent", searchEvent);
  }, [searchEvent]);
  useEffect(() => {
    localStorage.setItem("placeValue", placeValue);
  }, [placeValue]);
  useEffect(() => {
    localStorage.setItem("timeValue", timeValue);
  }, [timeValue]);

  const handleSearchChange = (event) => {
    setSearchEvent(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTimeValue(event.target.value);
  };
  const handlePlaceChange = (event) => {
    setPlaceValue(event.target.value);
  };
  return (
    <div className="">
      <div>
        <div className="hero-bg-img relative min-h-[400px] flex items-end justify-center lg:px-12 md:px-8 px-4">
          <div className="font-montserrat mb-16 z-10">
            <h1 className="text-center text-white lg:text-[40px] md:text-[36px] text-[32px] font-[600]">
              Don’t miss out!
            </h1>
            <h1 className="text-center text-white lg:text-[40px] md:text-[36px] text-[32px] font-[600]">
              Explore the <span className="text-[#FFE047]">vibrant events</span>{" "}
              happening locally and globally.
            </h1>
          </div>
          <div className="bg-[#3557C2] lg:block md:block hidden absolute ml-auto mr-auto left-0 right-0 -bottom-[50px] w-[90%] lg:w-[70vw] md:w-[90%] rounded-[10px] px-[3rem] py-[1.5rem] text-white">
            <form className="flex justify-center gap-[2rem] lg:gap-[4rem] md:gap-[3rem]">
              <div className="grid gap-[0.6rem]">
                <label htmlFor="" className="text-[0.7rem] font-[200]">
                  Search Event
                </label>
                <input
                  type="text"
                  value={searchEvent}
                  onChange={handleSearchChange}
                  className="border-b-[0.5px] border-[#7778B0] bg-[#3557C2] focus:outline-none"
                />
              </div>
              <div className="grid gap-[0.6rem]">
                <label htmlFor="" className="text-[0.7rem] font-[200]">
                  Place
                </label>
                <input
                  type="text"
                  value={placeValue}
                  onChange={handlePlaceChange}
                  className="border-b-[0.5px] border-[#7778B0] bg-[#3557C2] focus:outline-none"
                />
              </div>
              <div className="grid gap-[0.6rem]">
                <label htmlFor="" className="text-[0.7rem] font-[200]">
                  Time
                </label>
                <select
                  name=""
                  id=""
                  className="border-b-[0.5px] w-[15vw] border-[#7778B0] bg-[#3557C2] focus:outline-none"
                  onChange={handleTimeChange}
                >
                  <option value="">Any Date</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-[100px]">
        <div className="lg:px-12 md:px-8 px-4">
          <h2 className="text-[24px] lg:text-[32px] md:text[28px] font-[700] font-montserrat text-[#2D2C3C]">
            Explore Categories
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-[2rem]">
            {categoriesData.map((data, index) => {
              const { name, image } = data;
              return (
                <div
                  key={index}
                  className="cursor-pointer w-[170px] lg:h-[210px] md:h-[210px] h-[140px] px-2"
                >
                  <div className="lg:w-[150px] md:w-[100px] w-[70px] lg:h-[150px] md:h-[100px] h-[70px] m-auto rounded-full">
                    <img src={image} alt="" className="object-cover" />
                  </div>
                  <p className="text-center font-[500] mt-2 text-sm">{name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-[5rem] mb-[5rem] lg:px-12 md:px-8 px-4">
          <div className="flex flex-wrap items-center gap-x-12 gap-y-8 justify-between lg:justify-start md:justify-start">
            <h2 className="text-[24px] lg:text-[32px] md:text[28px] font-[700] font-montserrat text-[#2D2C3C]">
              Upcoming Events
            </h2>
            <div className="block lg:hidden md:hidden cursor-pointer border">
              <FaSliders className="text-[1.4rem]" />
            </div>
            {/* Mobile view */}
            <div className="w-full lg:hidden md:hidden flex gap-2 text-[#1D275F] text-sm">
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="min-w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Weekdays</option>
                </select>
              </div>
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="min-w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Event Type</option>
                </select>
              </div>
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="min-w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Any Category</option>
                </select>
              </div>
            </div>

            {/* Desktop view */}
            <div className="lg:flex md:flex hidden gap-4 text-[#1D275F] text-[0.9rem] ">
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="min-w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Weekdays</option>
                </select>
              </div>
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="min-w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Event Type</option>
                </select>
              </div>
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="min-w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Any Category</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
            {events.map((data, index) => {
              return <EventCard event={data} key={index} />;
            })}
          </div>
          <button className="bg-[#3557C2] px-[10rem] sm:px-[7rem] py-[0.5rem] rounded-[5px] text-white flex m-auto">
            See More
          </button>
        </div>

        <div className="mt-[5rem] mb-[5rem] lg:px-12 md:px-8 px-4">
          <div className="flex items-center gap-[13rem]">
            <h2 className="text-[24px] lg:text-[32px] md:text[28px] font-[700] font-montserrat text-[#2D2C3C]">
              Popular Events
            </h2>
          </div>
          <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
            {events.map((data, index) => {
              return <EventCard event={data} key={index} />;
            })}
          </div>
          <button className="bg-[#3557C2] px-[10rem] sm:px-[7rem] py-[0.5rem] rounded-[5px] text-white flex m-auto">
            See More
          </button>
        </div>

        <Recommend />
        <OtherEvents />
      </div>
    </div>
  );
}
