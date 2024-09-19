import { useEffect, useState } from "react";
import { END_POINT } from "../../../config/environment";
import BookingCard from "./BookingCard";
import PropTypes from "prop-types";
import { useCookies } from "react-cookie";

const Bookings = ({ bookings }) => {
  // const filterOptions = "Date"
  const [cookies] = useCookies(["userCookie"]);
  const [events, setEvents] = useState([]);

  const fetchInterestedEvents = async () => {
    var myHeaders = new Headers();
    const token = cookies?.userCookie;

    myHeaders.append("x-auth-token", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    await fetch(`${END_POINT.BASE_URL}/users/events`, requestOptions)
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
  useEffect(() => {
    fetchInterestedEvents();
  }, []);
  return (
    <main>
      <div className="bookingFilter mb-4">
        Sort By:
        <select name="filter" id="filter">
          <option value="date">Date</option>
          <option value="name">Name</option>
          <option value="location">Location</option>
        </select>
      </div>

      <div className="bookings flex flex-col items-start justify-center gap-16">
        {events?.map((event, _i) => (
          <BookingCard key={_i} booking={event} />
        ))}
      </div>
    </main>
  );
};

export default Bookings;

Bookings.propTypes = {
  bookings: PropTypes.array,
};
