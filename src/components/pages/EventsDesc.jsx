import React, { useState } from "react";
import { BiShareAlt } from "react-icons/bi";
import { IoCalendarOutline, IoTicket } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import OtherEvents from "./OtherEvents";
import SimpleMap from "./SimpleMap";
import { useNavigate, useLoaderData } from "react-router-dom";
import Modal from "../Modal";
import Share from "./Share";
import { useSelector } from "react-redux";
import { END_POINT } from "../../config/environment";
import ProtectedRouteMessage from "../ProtectedRouteMessage";
import toast from "react-hot-toast";

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

function EventsDesc() {
  //the return fetch event data
  const eventDetails = useLoaderData()
  const {token,user} = useSelector(state=>state.user)
  console.log(eventDetails)
  const [isAuth,setIsAuth] = useState(false)
  //const [modal, setModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const navigate = useNavigate();

  const {imageUrl, location, title,startTime,endTime,date:date_string,organizer=[],description,status } =eventDetails.data;
  const date = new Date(date_string).toLocaleDateString("en-Us",{day: "2-digit", month: "numeric", year: "numeric"}).replaceAll("/", "-");  
  console.log(date)
  function buyTicket(e) {
    e.preventDefault();
    navigate("/ticketBooking");
  }

  function toShare(){
    setShareModal(true)
  }

  async function eventRegHandler(){
    if(token === null){
      setIsAuth(true)
      return
    }
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
          `${END_POINT.BASE_URL}/event/${eventDetails.data["_id"]}/register`,
          requestOptions
        )
          .then((response) => {
            console.log(response)
            toast.success("registration successfull");
            return response.json();
          })
          .then((result) => {
            if (result.status === "success") {
              console.log("success", result);
              alert("registration successfull");
            } else {
              toast.error(result.message);
              console.log("error", result.message);
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      } 
     
  };
 
 
  return (
    <>
    {/* {modal && <Modal modalHandler={() => setModal(false)} >
      <AttendeeDets title={title} date={date_string} modalHandler={() => setModal(false)} />
    </Modal>} */}
    {isAuth && <ProtectedRouteMessage/>}
    {shareModal && <Modal modalHandler={() => setShareModal(false)}>
  
   <Share title={title} location={location} modalHandler={() => setShareModal(false)}/>
 </Modal>}  
    <div className="sm:px-9 lg:px-0 px-5 max-w-7xl m-auto pt-5 font-openSans">
      <div className="max-w-4xl mx-auto">
      <div className="w-[100%] h-[40vh] md:h-[35vh] sm:h-[20vh] rounded-[10px]">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full rounded-[10px] object-cover"
        />
      </div>

      <div className="mt-[2rem] sm:mt-[1rem]  text-[#2D2C3C] flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-extrabold capitalize">
         {title}
        </h1>
        <div className="text-[2rem] sm:text-[1.5rem] flex gap-2">
          <BiShareAlt onClick={toShare} className="cursor-pointer hover:text-[#3557c2]"/>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between">
        <div className="text-[#2D2C3C] grid gap-[0.8rem]">
          <h1 className="text-[1.3rem] md:text-[1.5rem] sm:text-[1.2rem] font-[600]">
            Date and Time
          </h1>
          <span className="flex items-center gap-[0.5rem]">
            <IoCalendarOutline className="text-[1.2rem]" />
            <h1 className="text-[0.9rem] md:text-[1.1rem] sm:text-[0.9rem] font-[500]">
              {date}
            </h1>
          </span>
          <span className="flex items-center gap-[0.5rem]">
            <BsClock className="text-[1.2rem]" />
            <h1 className="text-[0.9rem] md:text-[1.1rem] sm:text-[0.9rem] font-[500]">
            {startTime}-{endTime}
            </h1>
          </span>
          <a href="">
            <p className="px-[1rem] text-[0.9rem] md:text-[1.2rem] sm:text-[0.9rem] font-[500] text-[#4539B4]">
              + Add to Calendar
            </p>
          </a>
        </div>
        <div className="py-4">
         {status !== "Past" &&  <button
            //onClick={buyTicket}
            onClick={eventRegHandler}
            className="py-3 px-6 sm:px-2 rounded-md flex w-full  bg-[#3557C2] text-white justify-center "
          >
            <IoTicket className="text-[1.5rem]" /> Register
          </button>}
          <h1 className="my-[1rem] text-[1.3rem] sm:text-[1.1rem] font-[600]">
            Ticket Information
          </h1>
          <span className="flex items-center sm:text-[0.9rem] gap-[0.5rem]">
            <IoTicket />
            <p>Standard Ticket: Free</p>
          </span>
        </div>
      </div>

      <div className="mt-[3rem] md:w-[50%] sm:w-[90%] grid gap-4">
        <h1 className="text-[1.4rem] md:text-[1.5rem] sm:text-[1.2rem] font-[600]">Location</h1>
        <span className="flex md:items-start gap-4">
          <SlLocationPin className="text-4xl md:text-[4rem] md:hidden" />
          <p className="md:text-[1.2rem] sm:text-[1rem]">
          {location}
          </p>
        </span>
        <div className="w-[100%] h-[40vh] rounded-[10px]">
          <SimpleMap />
        </div>
      </div>

      <div className="mt-[3rem]">
        <h1 className="text-[1.4rem] sm:text-[1.2rem] font-[600]">Hosted By</h1>
        <div className="md:w-[40vw] sm:w-[80vw] mt-[1rem] mx-[1rem] p-[1rem]">
          <div className="flex items-center justify-between">
            <div className=" relative w-[3.5rem] h-[3.5rem] rounded-[100px] bg-[#D9D9D9]">
              <MdPerson className="text-white text-[2rem] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div>
              <h1 className="text-[0.9rem] font-[600]">{organizer[0]?.name}</h1>
              <p className="text-[0.7rem] font-[200]">{organizer[0]?.email}</p>
            </div>
            <div className="relative w-[2rem] h-[2rem] rounded-[100px] bg-[#5040A1]">
              <FaPlus className="text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          <p className="text-start my-[0.5rem] text-[0.8rem] text-[#5A5A5A]">
            Lorem ipsum dolor sit amet consectetur. Et mattis integer arcu
            ultricies elit scelerisque. Proin in nulla nuncincidunt{" "}
          </p>
          <a href="">
            <p className="flex gap-[0.3rem] items-center text-[0.7rem] text-[#5040A1]">
              Read More <IoIosArrowDown />
            </p>
          </a>
        </div>
      </div>

      <div className="mt-[3rem]">
        <h1 className="text-[1.4rem] sm:text-[1.2rem] font-[600]">Event Description</h1>
        {description}
      </div>

      <div className="mt-[3rem]">
        <h1 className="text-[1.4rem] sm:text-[1.2rem] font-[600]">Tags</h1>
        <div className="md:w-[45vw] sm:w-[90vw] mt-[1rem] flex flex-wrap gap-[1rem]">
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
          </div>
      <div className="mt-[5rem] md:px-0">
        <OtherEvents />
      </div>
    </div>
    </>
  );
}
export default EventsDesc;