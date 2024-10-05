import PropTypes from "prop-types";
import qrcode from "../../../assets/qr_code.png";
import moment from "moment";

const BookingCard = ({ booking }) => {
  const formattedDate = moment(booking.date).format("MMM DD YYYY"); // Replace 'YYYY-MM-DD' with your desired format
  const newFormattedMonth = formattedDate.slice(0, 4);
  const newFormattedDate = formattedDate.slice(4);
  const totalPrice = booking.ticket_price + booking.extra_charges;

  return (
    <div className="bookingCard flex flex-wrap items-start lg:justify-around md:justify-around justify-center lg:gap-2 md:gap-2 gap-1 lg:max-w-[1080px] md:w-full w-full">
      <div className="cardDetails lg:p-6 md:p-6 p-[10px] flex flex-wrap lg:justify-around md:justify-around gap-2 lg:w-[80%] md:w-[80%] bg-[#f0f0f0] lg:rounded-[22px] md:rounded-[22px] rounded-[15px]">
        <div className="card flex items-start gap-4 lg:w-[75%]">
          <div className="bookingImage lg:rounded-[16px] md:rounded-[16px] rounded-[10px] lg:w-[255px] md:w-[255px] w-[100px] h-[70px] overflow-hidden lg:h-[150px] md:h-[150px] shadow-md">
            <img
              className="w-full h-full object-cover"
              src={booking.imageUrl}
              alt={booking.name}
            />
          </div>

          <div className="bookingDetails w-full lg:text-[16px] md:text-[14px] text-[12px]">
            <h3 className="font-bold">{booking.title}</h3>
            <div className="locationDetails font-lighter mb-4">
              <p className="font-[500]">
                {formattedDate} at {booking.startTime}
              </p>
              <p>Seat number: {booking.seat_number}</p>
              <p>Quantity: {booking.quantity}</p>
              <p>Location: {booking.location}</p>
            </div>

            <div className="bookingPrice w-full">
              <p className="flex justify-between">
                <span>Ticket Price</span>
                <span>${booking.ticket_price}</span>
              </p>
              <p className="flex pb-2 border-b border-dotted border-black mb-2 justify-between">
                <span>Convenience Fee + Taxes</span>
                <span>${booking.extra_charges}</span>
              </p>
              <p className="font-bold flex justify-between">
                <span>Total paid</span>
                <span>${totalPrice}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="verticalLine border border-gray-500 border-dotted relative">
          <p className="upperCircle absolute lg:-top-[50px] md:-top-[50px] -top-[30px] lg:-left-[25px] md:-left-[25px] -left-[15px] lg:w-[50px] md:w-[50px] w-[30px] lg:h-[50px] md:h-[50px] h-[30px] rounded-full bg-white"></p>
          <p className="lowerCircle absolute lg:-bottom-[50px] md:-bottom-[50px] -bottom-[30px] lg:-left-[25px] md:-left-[25px] -left-[15px] lg:w-[50px] md:w-[50px] w-[30px] lg:h-[50px] md:h-[50px] h-[30px] rounded-full bg-white"></p>
        </div>

        <div className="qrCode flex flex-col items-center">
          <div className="image lg:w-[100px] md:w-[100px] w-[70px] lg:h-[100px] md:h-[100px] h-[70px]">
            <img
              className="w-full h-full object-cover"
              src={qrcode}
              alt="QR Code"
            />
          </div>
          <p className="flex flex-col items-center">
            <span className="lg:text-[16px] md:text-[14px] text-[14px]">
              Booking ID
            </span>
            <span className="lg:text-[16px] md:text-[14px] text-[14px]">
              {booking.id}
            </span>
          </p>
          <p className="download flex gap-1 hover:text-gray-900 text-gray-600 mt-8 cursor-pointer lg:text-[16px] md:text-[14px] text-[14px]">
            <img
              className="lg:w-[25px] md:w-[25px] w-[20px] lg:h-[25px] md:h-[25px] h-[20px]"
              src="https://img.icons8.com/pastel-glyph/64/download--v1.png"
              alt="download--v1"
            />
            Download PDF
          </p>
        </div>
      </div>

      <div className="cardExtra flex flex-col lg:items-start md:items-start items-center lg:gap-1 md:gap-1 gap-0 mt-4 lg:text-[16px] md:text-[16px] text-sm">
        <p className="text-gray-700">Follow Organizers</p>
        <p className="text-gray-700">Report Event</p>
        <p className="cursor-pointer text-red-700 underline">Cancel Booking</p>
      </div>
    </div>
  );
};

export default BookingCard;

BookingCard.propTypes = {
  booking: PropTypes.object,
};
