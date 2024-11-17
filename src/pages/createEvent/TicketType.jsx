import { HiOutlinePlusCircle } from "react-icons/hi2";
import { AppButton } from "../../components/button/AppButton";
import paidTicket from "../../assets/ion_ticket.png";
import freeTicket from "../../assets/free 1.png";
import useEvent from "../../hooks/useEvent";
import SellingTicket from "./SellingTicket";
import PropTypes from "prop-types";

export default function TicketType({ navigate, navigateBack }) {
  const { EventTicketType, dispatchFn, SellingTicketType } = useEvent();
  //const navigate = useNavigate()
  const onSubmit = function () {
    if (EventTicketType) {
      return navigate();
    }
    dispatchFn({ type: "event/empty/ticketType" });
  };
  //add more ticket input
  const moreTickets = function () {
    const id = Math.random() * 1990;
    dispatchFn({ type: "ticket/increase", id });
  };
  return (
    <form className="capitalize w-full lg:px-16 pt-6" onSubmit={onSubmit}>
      <div className="max-w-3xl mb-8">
        <h2 className="mb-6 lg:mb-2 text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-medium">
          what type of event are you running?
        </h2>
        <div className="grid grid-cols-1 [@media(min-width:420px)]:grid-cols-2 gap-2 lg:gap-10 relative">
          <div
            className={`${
              EventTicketType === "paid" ? "border-4" : ""
            } flex flex-col items-center border-[#828282] border rounded-xl p-4`}
            onClick={() =>
              dispatchFn({ type: "event/ticket/type", ticketType: "paid" })
            }
          >
            <input
              className="absolute bottom-0 opacity-0"
              required
              defaultValue={EventTicketType}
            />
            <img src={paidTicket} className="text-8xl font-thin" />
            <h3 className="capitalize">Ticketed Event</h3>
            <h4>My event requires tickets for entry</h4>
          </div>
          <div
            className={`${
              EventTicketType === "free" ? "border-4" : ""
            } flex flex-col items-center border-[#828282] border rounded-xl p-4`}
            onClick={() =>
              dispatchFn({ type: "event/ticket/type", ticketType: "free" })
            }
          >
            <img src={freeTicket} className="text-8xl font-thin" />
            <h3 className="capitalize">Ticketed Event</h3>
            <h4>My event requires tickets for entry</h4>
          </div>
        </div>
        {EventTicketType === null && (
          <p className="text-red-600 absolute z-0 md:left-60 md:-bottom-6 -bottom-6">
            Event selling ticket type is required
          </p>
        )}
      </div>
      {EventTicketType === "paid" && (
        <div className="max-w-3xl mb-8 relative">
          <h2 className="text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-medium mb-8">
            what tickets are you selling
          </h2>
          <div className="w-full grid gap-4">
            <div className="w-full grid gap-4">
              {SellingTicketType.map((data, index) => (
                <SellingTicket
                  key={data.id}
                  deleteTicket={index}
                  id={data.id}
                />
              ))}
            </div>
            <HiOutlinePlusCircle
              className="text-2xl font-normal lg:font-semibold absolute top-16 z-0 right-0"
              onClick={moreTickets}
            />
          </div>
        </div>
      )}
      <div className="flex justify-end gap-3 items-center">
        <AppButton
          variant="text"
          label="Go back to Edit Event"
          type="nav"
          containerStyle="capitalize"
          handleClick={navigateBack}
        />
        <AppButton
          type="submit"
          label="save & continue"
          containerStyle="capitalize"
        />
      </div>
    </form>
  );
}

TicketType.propTypes = {
  navigate: PropTypes.func,
  navigateBack: PropTypes.func,
};
