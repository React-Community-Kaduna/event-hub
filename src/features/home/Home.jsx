import { useEffect, useState } from "react";
import tech from "../../../src/assets/images/tech.png";
import cultural from "../../../src/assets/images/cultural.png";
import education from "../../../src/assets/images/education.png";
import entertainment from "../../../src/assets/images/entertainment.png";
import field from "../../../src/assets/images/field.png";
import governmental from "../../../src/assets/images/governmental.png";
import image1 from "../../../src/assets/images/blocks.png";
import image2 from "../../../src/assets/images/blog.png";
import Recommend from "../../components/pages/Recommend";
import OtherEvents from "../../components/pages/OtherEvents";
import EventCard from "../../components/cards/EventCard";
import { FaSliders } from "react-icons/fa6";
import {
  allEvents,
  porpularEvents,
} from "../../services/events/events-context";
import { useDispatch, useSelector } from "react-redux";

const categoriesData = [
  { name: "Technology & Innovation", image: tech },
  { name: "Entertainment", image: entertainment },
  { name: "Educational & Business", image: education },
  { name: "Cultural & Arts", image: cultural },
  { name: "Governmental", image: governmental },
  { name: "Sports & Fitness", image: field },
];

const upcomingData = [
  {
    image: image1,
    location: "Colab",
    month: "JAN",
    date: "25 - 26",
    title: "Introduction to Artificial Intelligence (AI)",
    time: "8:30 AM - 7:30 PM",
    ticket: "Free",
    interested: 14,
  },
  {
    image: image2,
    location: "Ihifix",
    month: "FEB",
    date: "01 - 04",
    title: "Africa Soft Power Summit 2024",
    time: "8:30 AM - 7:30 PM",
    ticket: "Free",
    interested: 14,
  },
  {
    image: image1,
    location: "KADAHIVE",
    month: "FEB",
    date: "25 - 26",
    title: "The RollApp Draft Hackathon Powered b...",
    time: "8:30 AM - 7:30 PM",
    ticket: "Free",
    interested: 14,
  },
  {
    image: image2,
    location: "Colab",
    month: "JAN",
    date: "25 - 26",
    title: "Introduction to Artificial Intelligence (AI)",
    time: "8:30 AM - 7:30 PM",
    ticket: "Free",
    interested: 14,
  },
  {
    image: image1,
    location: "Ihifix",
    month: "FEB",
    date: "01 - 04",
    title: "Africa Soft Power Summit 2024",
    time: "8:30 AM - 7:30 PM",
    ticket: "Free",
    interested: 14,
  },
  {
    image: image2,
    location: "KADAHIVE",
    month: "FEB",
    date: "25 - 26",
    title: "The RollApp Draft Hackathon Powered b...",
    time: "8:30 AM - 7:30 PM",
    ticket: "Free",
    interested: 14,
  },
];
export default function Home() {
  const [searchEvent, setSearchEvent] = useState("Google Dev Fest");
  const [placeValue, setPlaceValue] = useState("KadaHive");
  const [timeValue, setTimeValue] = useState("Any Date");
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event.allEvents);
  const porpularEvent = useSelector((state) => state.event.porpularEvents);
  console.log(event, "all");

  const status = useSelector((state) => state.event.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(porpularEvents())
        .then((response) => {
          // Handle successful login (e.g., redirect to dashboard)
          console.log("porpular events:", response);
        })
        .catch((error) => {
          // Handle login errors (e.g., display error message)
          console.error("Login error:", error);
        });

      dispatch(allEvents())
        .then((response) => {
          // Handle successful login (e.g., redirect to dashboard)
          console.log("all events:", response);
        })
        .catch((error) => {
          // Handle login errors (e.g., display error message)
          console.error("Login error:", error);
        });
    }
  }, [status, dispatch]);

  useEffect(() => {
    const storedValue = localStorage.getItem("searchEvent");
    if (storedValue) {
      setSearchEvent(storedValue);
    }
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
            <div className="w-full lg:hidden md:hidden flex gap-2 text-[#1D275F] text-sm flex-wrap">
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="min-w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Pick a day</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>
              </div>
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="min-w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Pick an event type</option>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="hackathon">Hackathon</option>
                  <option value="meetup">Meetup</option>
                  <option value="webinar">Webinar</option>
                </select>
              </div>
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="min-w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Pick a category</option>
                  {categoriesData.map((data, index) => {
                    const { name } = data;
                    return (
                      <option value="" key={index}>
                        {name}
                      </option>
                    );
                  })}
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
                  <option value="">Pick a day</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>
              </div>
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="min-w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Pick an event type</option>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="hackathon">Hackathon</option>
                  <option value="meetup">Meetup</option>
                  <option value="webinar">Webinar</option>
                </select>
              </div>
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="min-w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Pick a category</option>
                  {categoriesData.map((data, index) => {
                    const { name } = data;
                    return (
                      <option value="" key={index}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
            {event?.map((data, index) => {
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
            {porpularEvent?.map((data, index) => {
              return <EventCard event={data} key={index} />;
            })}
          </div>
          <button className="bg-[#3557C2] px-[10rem] sm:px-[7rem] py-[0.5rem] rounded-[5px] text-white flex m-auto">
            See More
          </button>
        </div>

        <Recommend />
        {/* <OtherEvents /> */}
      </div>
    </div>
  );
}
