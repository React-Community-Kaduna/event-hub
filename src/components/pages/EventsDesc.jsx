import React, { useEffect, useState } from "react";
import { BiCalendar, BiShareAlt } from "react-icons/bi";
import { IoCalendarOutline, IoStar, IoTicket } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { SlLocationPin } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import OtherEvents from "./OtherEvents";
import AIimage from "../../../src/assets/images/AIimage.png";
import SimpleMap from "./SimpleMap";
import TicketBooking from "./TicketBooking";
import moment from "moment";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { END_POINT } from "../../config/environment";
import CalendarIntegration from "./addToCalender";

const tagData = [
  { name: "Tech" },
  { name: "Event" },
  { name: "Kaduna" },
  { name: "AI" },
  { name: "Software" },
  { name: "Colab" },
  { name: "Tech" },
  { name: "Event" },
  { name: "Kaduna" },
  { name: "AI" },
  { name: "Software" },
];

export default function EventsDesc() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [event, setEvent] = useState([]);
  const formattedDate = moment(event?.date).format("dddd MMM DD YYYY");
  const [cookies] = useCookies(["userCookie"]);
  const token = cookies?.userCookie;
  const user = localStorage.getItem("user");
  const parsedItem = JSON.parse(user); // If stored as JSON, parse it
  var userId = parsedItem?._id;

  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        `${END_POINT.BASE_URL}/event/get-event/${eventId}`
      );
      setEvent(response.data.data);
      console.log("g", response.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const handleRegister = async () => {
    if (user && token) {
      let userConfirmed = window.confirm(
        "are you sure you want to register for this event"
      );
      if (userConfirmed) {
        var myHeaders = new Headers();
        myHeaders.append("x-auth-token", token);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow",
        };
        await fetch(
          `${END_POINT.BASE_URL}/event/${eventId}/register`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.status === "success") {
              alert("registration successfull");
            } else {
              console.log("error", result.message);
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      } else {
        alert("User clicked Cancel.");
      }
    } else {
      navigate("/login");
    }
  };
  const handleUnRegister = async () => {
    let userConfirmed = window.confirm(
      "are you sure you want to unregister for this event"
    );
    if (userConfirmed) {
      var myHeaders = new Headers();
      myHeaders.append("x-auth-token", token);

      var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      };
      await fetch(
        `${END_POINT.BASE_URL}/event/${eventId}/unregister`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          alert(result.message);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      alert("User clicked Cancel.");
    }
  };

  console.log(event.organizer, "org");

  var intt = event?.interestedUsers?.includes(userId);
  console.log(intt, "rr", userId);

  function buyTicket(e) {
    e.preventDefault();
    navigate("/ticketBooking");
  }

  function toShare() {
    navigate("/share");
  }
  useEffect(() => {
    fetchEvent();
  }, []);
  return (
    <div className="px-[2rem] md:px-[1rem] py-[2rem] sm:py-[1rem] font-openSans">
      <div className="w-[100%] h-[40vh] md:h-[25vh] sm:h-[20vh] rounded-[10px]">
        <img
          src={event?.imageUrl}
          alt=""
          className="w-full h-full rounded-[10px] object-cover"
        />
      </div>

      <div className="mt-[2rem] sm:mt-[1rem]  text-[#2D2C3C] flex items-center justify-between">
        <h1 className="text-[2rem] sm:text-[1.2rem] font-[800]">
          {event?.title}
        </h1>
        <div className="text-[2rem] sm:text-[1.5rem] flex gap-[1.5rem] sm:gap-[1rem]">
          <IoStar className="cursor-pointer" />
          <BiShareAlt onClick={toShare} className="cursor-pointer" />
        </div>
      </div>

      <div className="mt-[3rem] flex sm:grid sm:gap-[0.5rem] justify-between">
        <div className="text-[#2D2C3C] grid gap-[0.8rem]">
          <h1 className="text-[1.3rem] md:text-[1.5rem] sm:text-[1.2rem] font-[600]">
            Date and Time
          </h1>
          <span className="flex items-center gap-[0.5rem]">
            <IoCalendarOutline className="text-[1.2rem]" />
            <h1 className="text-[0.9rem] md:text-[1.1rem] sm:text-[0.9rem] font-[500]">
              {formattedDate}
            </h1>
          </span>
          <span className="flex items-center gap-[0.5rem]">
            <BsClock className="text-[1.2rem]" />
            <h1 className="text-[0.9rem] md:text-[1.1rem] sm:text-[0.9rem] font-[500]">
              {event.startTime} - {event.endTime}
            </h1>
          </span>
          {/* <a href="">
            <p className="px-[1rem] text-[0.9rem] md:text-[1.2rem] sm:text-[0.9rem] font-[500] text-[#4539B4]">
              + Add to Calendar
            </p>
          </a> */}
          <CalendarIntegration event={event} />
        </div>
        <div>
          <button
            onClick={buyTicket}
            className="flex gap-[0.5rem] text-[1.2rem] sm:text-[1rem] items-center bg-[#3557C2] px-[2rem] py-[0.7rem] rounded-[5px] text-white"
          >
            <IoTicket className="text-[1.5rem]" /> Buy Tickets
          </button>
          {intt ? (
            <>
              <p className="mt-3">You have already registered for this event</p>

              <button
                onClick={handleUnRegister}
                className="mt-2 flex gap-[0.5rem] text-[1.2rem] sm:text-[1rem] items-center bg-[#3557C2] px-[2rem] py-[0.7rem] rounded-[5px] text-white"
              >
                <IoTicket className="text-[1.5rem]" /> UnRegister
              </button>
            </>
          ) : (
            <>
              {" "}
              <button
                onClick={handleRegister}
                className="mt-2 flex gap-[0.5rem] text-[1.2rem] sm:text-[1rem] items-center bg-[#3557C2] px-[2rem] py-[0.7rem] rounded-[5px] text-white"
              >
                <IoTicket className="text-[1.5rem]" /> Register
              </button>
            </>
          )}
          <p className="mt-3">
            {event?.interestedUsers?.length} people have registered for this
            event
          </p>
          <h1 className="my-[1rem] text-[1.3rem] sm:text-[1.1rem] font-[600]">
            Ticket Information
          </h1>
          <span className="flex items-center sm:text-[0.9rem] gap-[0.5rem]">
            <IoTicket />
            <p>Standard Ticket: Free</p>
          </span>
        </div>
      </div>

      <div className="mt-[3rem] w-[40%] md:w-[50%] sm:w-[90%]">
        <h1 className="text-[1.4rem] md:text-[1.5rem] sm:text-[1.2rem] font-[600]">
          Location
        </h1>
        <span className="flex md:items-start gap-[0.5rem] my-[0.5rem]">
          <SlLocationPin className="text-[1.8rem] md:text-[4rem] md:hidden" />
          <p className="md:text-[1.2rem] sm:text-[1rem]">{event?.location}</p>
        </span>
        <div className="w-[100%] h-[40vh] rounded-[10px]">
          <SimpleMap />
        </div>
      </div>

      <div className="mt-[3rem]">
        <h1 className="text-[1.4rem] sm:text-[1.2rem] font-[600]">Hosted By</h1>
        <div className="w-[20vw] md:w-[40vw] sm:w-[80vw] mt-[1rem] mx-[1rem] p-[1rem]">
          <div className="flex items-center justify-between">
            <div className=" relative w-[3.5rem] h-[3.5rem] rounded-[100px] bg-[#D9D9D9]">
              <MdPerson className="text-white text-[2rem] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div>
              {event?.organizer?.map((org) => (
                <>
                  <h1 className="text-[0.9rem] font-[600]">{org?.name}</h1>
                  <p className="text-[0.7rem] font-[200]">{org?.email}</p>
                </>
              ))}
            </div>
            <div className="relative w-[2rem] h-[2rem] rounded-[100px] bg-[#5040A1]">
              <FaPlus className="text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          {/* <p className="text-start my-[0.5rem] text-[0.8rem] text-[#5A5A5A]">
            Lorem ipsum dolor sit amet consectetur. Et mattis integer arcu
            ultricies elit scelerisque. Proin in nulla nuncincidunt{" "}
          </p>
          <a href="">
            <p className="flex gap-[0.3rem] items-center text-[0.7rem] text-[#5040A1]">
              Read More <IoIosArrowDown />
            </p>
          </a> */}
        </div>
      </div>

      <div className="mt-[3rem]">
        <h1 className="text-[1.4rem] sm:text-[1.2rem] font-[600]">
          Event Description
        </h1>
        <div className="text-[#5A5A5A] italic">
          <p className="my-[1rem]">{event.description}</p>
        </div>
      </div>

      <div className="mt-[3rem]">
        <h1 className="text-[1.4rem] sm:text-[1.2rem] font-[600]">Tags</h1>
        <div className="w-[30vw] md:w-[45vw] sm:w-[90vw] mt-[1rem] flex flex-wrap gap-[1rem]">
          {tagData.map((data, index) => {
            return (
              <div
                key={index}
                className="bg-[#F8F7FA] text-[0.8rem] px-[1rem] py-[0.4rem] rounded-[50px]"
              >
                {data.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[5rem] md:px-0"></div>
    </div>
  );
}
