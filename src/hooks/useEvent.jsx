import { useContext } from "react";
import { CreateEventContext } from "../stateManagement/CreateEventContex";

export default function useEvent() {
  const {
    event: { date_Time: session, eventType },
    title,
    category,
    location,
    description,
    banner,
    imageUrl,
    ticket: { EventTicketType, SellingTicketType },
    dispatchFn,
    dispatchFn1,
  } = useContext(CreateEventContext);

  return {
    imageUrl,
    dispatchFn1,
    eventType,
    session,
    dispatchFn,
    title,
    banner,
    category,
    location,
    description,
    EventTicketType,
    SellingTicketType,
  };
}
