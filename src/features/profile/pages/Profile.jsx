import { useEffect, useState } from "react";
import profileImage from "../../../assets/img.png";
import About from "../components/About";
import Bookings from "../components/Bookings";
import Settings from "../components/Settings";
import event1 from "../../../assets/event.png";
import PropTypes from "prop-types";
import { END_POINT } from "../../../config/environment";
import { useCookies } from "react-cookie";

// const user = {
//   name: "mercy ayomide",
//   dob: "23/04/2000",
//   email: "mercyayomide@gmail.com",
//   contact_number: "1234567890",
//   about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit eaque, similique temporibus tempora animi debitis maxime eius nam modi adipisci atque! Quod nam incidunt aspernatur recusandae adipisci error consequuntur vitae nemo, dolore porro eaque temporibus sint esse obcaecati quae veniam facere facilis ducimus officiis magnam fuga inventore unde dolores!",
//   bookings: [
//     {
//       id: "WQ0036HQ",
//       name: "Event One",
//       image: event1,
//       date: "Nov 4, 2023",
//       time: "12:13am",
//       quantity: 2,
//       venue: "Kaduna",
//       ticket_price: 20,
//       extra_charges: 20,
//       seat_number: "M02, N03",
//     },
//     {
//       id: "WQ0036HQ",
//       name: "Event Two",
//       image: event1,
//       date: "Nov 4, 2023",
//       time: "12:13am",
//       quantity: 2,
//       venue: "Kaduna",
//       ticket_price: 20,
//       extra_charges: 20,
//       seat_number: "M02, N03",
//     },
//     {
//       id: "WQ0036HQ",
//       name: "Event Three",
//       image: event1,
//       date: "Nov 4, 2023",
//       time: "12:13am",
//       quantity: 2,
//       venue: "Kaduna",
//       ticket_price: 20,
//       extra_charges: 20,
//       seat_number: "M02, N03",
//     },
//     {
//       id: "WQ0036HQ",
//       name: "Event Four",
//       image: event1,
//       date: "Nov 4, 2023",
//       time: "12:13am",
//       quantity: 2,
//       venue: "Kaduna",
//       ticket_price: 20,
//       extra_charges: 20,
//       seat_number: "M02, N03",
//     }
//   ]
// };
const Profile = ({ activePath }) => {
  const [cookies] = useCookies(["userCookie"]);
  const [_, setCookie] = useCookies(["userEventsCookie"]);

  const user = JSON.parse(localStorage.getItem("user")) || [];
  const token = cookies?.userCookie;
  // const userEvents = _?.userEventsCookie;

  const getRegisteredEvents = async () => {
    // const token = localStorage.getItem("token");

    var myHeaders = new Headers();
    myHeaders.append("x-auth-token", token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    await fetch(`${END_POINT.BASE_URL}/users/events`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("user events", result.events);
        setCookie("userEventsCookie", JSON.stringify(result.events), {
          path: "/",
          maxAge: 28800,
        });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

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
  const [active, setActive] = useState("about me");

  const toggleActive = (arr, val) => {
    let newArr = [];
    arr.forEach((el) => {
      if (el.name == val) {
        newArr.push({
          name: el.name,
          active: true,
        });
      } else {
        newArr.push({
          name: el.name,
          active: false,
        });
      }
    });
    console.log(newArr);
    setProfileHeadings(newArr);
    setActive(val);
  };

  useEffect(() => {
    // userEvents
    //   ? console.log("user events available", userEvents)
    getRegisteredEvents();
  }, []);

  return (
    <main className="lg:px-0 md:px-0 px-2">
      <div className="w-full flex py-10 px-4 gap-4">
        <div className="profileImage w-[350px] rounded-[18px] overflow-hidden shadow-md h-[250px] bg-gray-200 flex items-center justify-center">
          {profileImage ? (
            <img
              className="w-full h-full object-cover"
              src={profileImage}
              alt="Profile Image"
            />
          ) : (
            <img
              className="w-full h-full p-10"
              src="https://img.icons8.com/fluency-systems-filled/96/user.png"
              alt="user"
            />
          )}
        </div>

        <div className="profileBio w-full flex items-start justify-between">
          <div className="details text-gray-700 flex flex-col gap-2">
            {/* Name */}
            <div className="name text-2xl capitalize mb-5 font-bold">
              <h2>{user.name}</h2>
            </div>

            {/* Date of Birth */}
            <div className="dob lg:text-[16px] md:text-[16px] text-sm">
              <span>Date of Birth: </span>
              <span>{user.dob}</span>
            </div>

            {/* Email */}
            <div className="email lg:text-[16px] md:text-[16px] text-sm">
              <span>Email ID: </span>
              <span>{user.email}</span>
            </div>

            {/* Contact Number */}
            <div className="contact lg:text-[16px] md:text-[16px] text-sm">
              <span>Contact Number: </span>
              <span>{user.contact_number}</span>
            </div>
          </div>

          <div className="editIcon cursor-pointer pt-1">
            <img
              className="w-[25px] h-[25px] cursor-pointer"
              src="https://img.icons8.com/fluency-systems-regular/48/create-new.png"
              alt="create-new"
              onClick={() =>
                activePath({
                  path: "account info",
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="profileDetails my-10 lg:px-0 md:px-0 px-1">
        <div className="headings flex items-start justify-between lg:pr-20 md:pr-16 mb-10">
          {profileHeadings.map((heading, _i) => (
            <p
              className={`cursor-pointer lg:w-[150px] md:w-[150px] w-fit capitalize lg:text-lg md:text-lg text-[14px] ${
                heading.active
                  ? "font-[600] underline-offset-8 underline text-blue-900"
                  : "hover:text-gray-900 font-[500] text-gray-600 duration-300 transition-all"
              }`}
              key={_i}
              onClick={() => {
                toggleActive(profileHeadings, heading.name);
              }}
            >
              {heading.name}
            </p>
          ))}
        </div>

        <div className="headingsDetails">
          {active == "about me" && <About about={user.about} />}
          {active == "my bookings" && <Bookings bookings={userEvents} />}
          {active == "my events" && (
            <p className="text-gray-700 leading-[1.5]">
              {user.events ?? "No event created"}
            </p>
          )}
          {active == "calendar" && (
            <p className="text-gray-700 leading-[1.5]">
              {user.calendar ?? "No events added to your calendar"}
            </p>
          )}
          {active == "settings" && <Settings />}
        </div>
      </div>
    </main>
  );
};

export default Profile;

Profile.propTypes = {
  activePath: PropTypes.func,
};
