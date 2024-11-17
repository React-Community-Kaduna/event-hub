import BookingCard from "./BookingCard";
import PropTypes from 'prop-types';

const Bookings = ({bookings}) => {
  // const filterOptions = "Date"
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
        {bookings.map((booking, _i) => (
          <BookingCard key={_i} booking={booking} />
        ))}
      </div>
    </main>
  )
}

export default Bookings

Bookings.propTypes = {
  bookings: PropTypes.array
}