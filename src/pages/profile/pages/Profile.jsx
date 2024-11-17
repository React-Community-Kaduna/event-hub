import { useEffect, useState } from "react";
import About from "../components/About";
import Bookings from "../components/Bookings";
import Settings from "../components/Settings";
import event1 from "../../../assets/event.png";
import PropTypes from "prop-types";
import MyEvents from "../components/MyEvents";
import { useSelector } from "react-redux";
import { appRoutes } from "../../../config/routeMgt/RoutePaths";
import { useNavigate } from "react-router-dom";

const users = {
  contact_number: "1234567890",
  about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit eaque, similique temporibus tempora animi debitis maxime eius nam modi adipisci atque! Quod nam incidunt aspernatur recusandae adipisci error consequuntur vitae nemo, dolore porro eaque temporibus sint esse obcaecati quae veniam facere facilis ducimus officiis magnam fuga inventore unde dolores!",
  bookings: [
    {
      id: "WQ0036HQ",
      name: "Event One",
      image: event1,
      date: "Nov 4, 2023",
      time: "12:13am",
      quantity: 2,
      venue: "Kaduna",
      ticket_price: 20,
      extra_charges: 20,
      seat_number: "M02, N03",
    },
    {
      id: "WQ0036HQ",
      name: "Event Two",
      image: event1,
      date: "Nov 4, 2023",
      time: "12:13am",
      quantity: 2,
      venue: "Kaduna",
      ticket_price: 20,
      extra_charges: 20,
      seat_number: "M02, N03",
    },
    {
      id: "WQ0036HQ",
      name: "Event Three",
      image: event1,
      date: "Nov 4, 2023",
      time: "12:13am",
      quantity: 2,
      venue: "Kaduna",
      ticket_price: 20,
      extra_charges: 20,
      seat_number: "M02, N03",
    },
    {
      id: "WQ0036HQ",
      name: "Event Four",
      image: event1,
      date: "Nov 4, 2023",
      time: "12:13am",
      quantity: 2,
      venue: "Kaduna",
      ticket_price: 20,
      extra_charges: 20,
      seat_number: "M02, N03",
    }
  ]
};
const Profile = ({activePath}) => {
  const {user,token} = useSelector((state) => state?.user);
  const navigate = useNavigate();
  console.log(user,token)
  useEffect(() => {
    if(token===null) {
      navigate('/')
    }
  }, [token])
 
  const [profileHeadings, setProfileHeadings] = useState([
    {
      name: "about me",
      active: true,
    },
    {
      name: "my bookings",
      active: false,
    },
    {
      name: "my events",
      active: false,
    },
    {
      name: "calendar",
      active: false,
    },
    {
      name: "settings",
      active: false,
    },
  ]);
  const [active, setActive] = useState("about me")
  
  const toggleActive = (arr, val) => {
    let newArr = []
    arr.forEach((el) => {
      if(el.name == val) {
        newArr.push({
          name: el.name,
          active: true,
        })
      } else {
        newArr.push({
          name: el.name,
          active: false
        })
      }
    })
    console.log(newArr)
    setProfileHeadings(newArr);
    setActive(val)
  }
  
  return (
    <main className="lg:px-0 md:px-0 px-2">
      <div className="w-full flex flex-col md:flex-row py-10 px-4 gap-4 items-center relative">
        <div className="border w-52 h-52 md:w-1/2 md:h-fit max-w-72 overflow-hidden shadow-md bg-gray-200 rounded-full flex items-center justify-center">
            <img
              className="w-full h-full object-cover rounded-full"
              src={user?.avatar}
              alt="Profile Image"
            />
        </div>

        <div className="profileBio w-full flex items-start justify-between md:text-start text-center">
          <div className="text-gray-700 mx-auto md:mx-0">
            {/* Name */}
            <div className="name text-2xl capitalize mb-5 font-bold">
              <h2>{user?.fullName}</h2>
            </div>

            {/* Email */}
            <div className="email lg:text-[16px] md:text-[16px] text-sm">
              <span>Email Id: </span>
              <span>{user?.email}</span>
            </div>

            {/* Contact Number */}
            <div className="contact lg:text-[16px] md:text-[16px] text-sm">
              <span>Contact Number: </span>
              <span>{user?.contact?user?.contact:"7425855257"}</span>
            </div>
          </div>

          <div className="editIcon cursor-pointer pt-1 absolute top-0 right-0">
            <img className="w-[25px] h-[25px] cursor-pointer" src="https://img.icons8.com/fluency-systems-regular/48/create-new.png" alt="create-new" onClick={() => 
              activePath({
                path: "account info"
              })}/>
          </div>
        </div>
      </div>

      <div className="profileDetails my-10 lg:px-0 md:px-0 px-1">
        <div className="headings flex items-start justify-between lg:pr-20 md:pr-16 mb-10">
          {profileHeadings.map((heading, _i) => (
            <p
              className={`cursor-pointer lg:w-[150px] md:w-[150px] w-fit capitalize lg:text-lg md:text-lg text-[14px] ${heading.active ? 'font-[600] underline-offset-8 underline text-blue-900' : 'hover:text-gray-900 font-[500] text-gray-600 duration-300 transition-all'}`} 
              key={_i}
              onClick={() => {
                toggleActive(profileHeadings, heading.name)
              }}
            >
              {heading.name}
            </p>
          ))}
        </div>

        <div className="headingsDetails">
          {active == "about me" && <About />}
          {active == "my bookings" && <Bookings bookings={users.bookings} />}
          {active == "my events" && <div className="pr-4">{<MyEvents events={user.bookings}/>}</div>}
          {active == "calendar" && <p className="text-gray-700 leading-[1.5]">{user.calendar ?? 'No events added to your calendar'}</p>}
          {active == "settings" && <Settings />}
        </div>
      </div>
    </main>
  );
};

export default Profile;

Profile.propTypes = {
  activePath: PropTypes.func
}