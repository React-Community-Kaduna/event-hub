import PropTypes from "prop-types";
import { IoTicket } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
import moment from "moment";

const EventCard = ({ event }) => {
  const {
    imageUrl,
    location,
    title,
    date,
    interestedUsers,
    startTime,
    endTime,
    ticket,
    _id,
    time,
  } = event;
  const formattedDate = moment(date).format("MMM DD YYYY"); // Replace 'YYYY-MM-DD' with your desired format
  const newFormattedMonth = formattedDate.slice(0, 4);
  const newFormattedDate = formattedDate.slice(4);
  return (
    <Link
      to={`/eventdescription/${_id}`}
      className="mb-[3rem] border border-gray-50 w-[350px] hover:border-gray-200 transition-all duration-300 p-4 rounded-[8px] cursor-pointer"
    >
      <img
        src={imageUrl}
        alt=""
        className="w-full h-1/2 object-cover rounded-tr-[10px] rounded-tl-[10px]"
      />
      <div className="mt-9 px-[1rem] md:px-0 flex gap-[1rem] md:gap-[0.5rem] text-[#2D2C3C]">
        <div className="">
          <h1 className="text-[#4539B4] font-[600] text-center">
            {newFormattedMonth}
          </h1>
          <h1 className="text-center text-[#2D2C3C] font-[600]">
            {" "}
            {newFormattedDate}
          </h1>
        </div>
        <div>
          <h1 className="text-[1.1rem] font-[500]">{location}</h1>
          <p className="text-[0.9rem]">{title}</p>
          <p className="text-[0.8rem] font-[300]">
            {" "}
            {startTime}-{endTime}
          </p>
          <div className="flex items-center gap-[0.7rem]">
            <span className="flex items-center gap-[0.3rem] text-[#5A5A5A] text-[0.9rem]">
              <IoTicket />
              <h1>{ticket} </h1>
            </span>
            <GoDotFill className="text-[0.6rem] text-[#5A5A5A]" />
            <span className="flex items-center gap-[0.3rem]">
              <IoStar className="text-[#4539B4]" />
              <h1 className="text-[#5A5A5A] text-[0.9rem]">
                {interestedUsers?.length} interested
              </h1>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
};
