import PropTypes from "prop-types";
// import EventCard from "../../../components/EventCard";

const MyEvents = ({events}) => {
  return (
    <main className="flex justify-between items-center flex-wrap"> 
      {events?.map(event => (
        <div key={event.id} className="event">
          <div className="event__image">
            <img src={event.image} alt={event.name} />
          </div>
          <div className="event__details">
            <div className="event__name">
              {event.name}
            </div>
            <div className="event__date">
              {event.date}
            </div>
            <div className="event__time">
              {event.time}
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}

export default MyEvents;

MyEvents.propTypes = {
  events: PropTypes.array
}
