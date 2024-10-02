import { useContext } from "react";
import { CreateEventContext } from "../stateManagement/CreateEventContex";

export default function useEvent() {
  const {
    event: { date_Time:session, eventType },
    title,
    category,
    location,
    description,
    banner,
    ticket:{EventTicketType,SellingTicketType},
    dispatchFn,organizationDetails:{orgEmail,orgName,orgContact}
  } = useContext(CreateEventContext);


  return { eventType,session, dispatchFn,title,banner,category,location,description,EventTicketType,SellingTicketType,orgEmail,orgName,orgContact };
}
