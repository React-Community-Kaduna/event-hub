import { useContext } from "react";
import { CreateEventContext } from "../stateManagement/CreateEventContex";

export default function useEvent() {
  const {
    event: { date_Time: session },
    title,
    category,
    location,
    description,
    banner,
    imageUrl,

    ticket: { EventTicketType, SellingTicketType },
    dispatchFn,
    dispatchFn1,

    organizationDetails: { orgEmail, orgName, orgContact },
  } = useContext(CreateEventContext);

  return {
    imageUrl,
    dispatchFn1,
    session,
    dispatchFn,
    title,
    banner,
    category,
    location,
    description,
    EventTicketType,
    SellingTicketType,
    orgEmail,
    orgName,
    orgContact,
  };
}
