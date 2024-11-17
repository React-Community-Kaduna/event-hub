import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

//initial create event details object
const initialValue = {
  title: { name: "", error: false },
  category: { category: "", error: false },
  event: {
    date_Time: [
      {
        id: 565,
        startTime: { time: "", error: false },
        endTime: { time: "", error: false },
        startDate: { date: "", error: false },
      },
    ],
  },
  location: { name: "", error: false },
  description: { detail: "", error: false },
  banner: { image: "", error: false },
  ticket: {
    EventTicketType: "",
    SellingTicketType: [
      {
        id: 565,
        ticketName: { name: "", error: false },
        ticketPrice: { price: "000", error: false },
      },
    ],
  },
  organizationDetails: {
    orgName: { name: "", error: false },
    orgEmail: { Email: "", error: false },
    orgContact: { contact: "", error: false },
  },
};
export const CreateEventContext = createContext(initialValue);
const reducerFn = (state, action) => {
  //dispact event for event organizer name action
  if (action.type === "event/orgName") {
    return {
      ...state,
      organizationDetails: {
        ...state.organizationDetails,
        orgName: { ...state.organizationDetails.orgName, name: action.value, error:false },
      },
    };
  }
   //dispact event for event organizatier email action
   if (action.type === "event/orgEmail") {
    return {
      ...state,
      organizationDetails: {
        ...state.organizationDetails,
        orgEmail: { ...state.organizationDetails.orgEmail, Email: action.value,error:false },
      },
    };
  }

  //dispact event for event organizer contact action
  if (action.type === "event/orgContact") {
    return {
      ...state,
      organizationDetails: {
        ...state.organizationDetails,
        orgContact: { ...state.organizationDetails.orgContact, contact: action.value,error:false },
      },
    };
  }

  //dispact event banner/image action
  if (action.type === "event/banner") {
    return {
      ...state,
      banner: { ...state.banner, image: action.image, error: false,file:action.file },
    };
  }
  //dispact event actions for empty input fields
  if (action.type === "event/empty") {
    //dispact event ticketType
    if (action.type === "event/empty/ticketType") {
      return { ...state, ticket: { ...state.ticket, EventTicketType: null } };
    }

    //dispact event for empty event organizer mail error
   if (action.field === "orgEmail/empty") {
    return {
      ...state,
      organizationDetails: {
        ...state.organizationDetails,
        orgEmail: { ...state.organizationDetails.orgEmail, error: true },
      },
    };
  }

    //dispact event for empty event organizer name error
   if (action.field === "orgName/empty") {
    return {
      ...state,
      organizationDetails: {
        ...state.organizationDetails,
        orgName: { ...state.organizationDetails.orgName, error: true },
      },
    };
  }    
  
    //dispact event for empty event organizer contact error
    if (action.field === "orgContact/empty") {
      return {
        ...state,
        organizationDetails: {
          ...state.organizationDetails,
          orgContact: { ...state.organizationDetails.orgContact, error: true },
        },
      };
    }  

    //dispact event date & time actions
    if (
      action.field === "startDate" ||
      action.field === "startTime" ||
      action.field === "endTime"
    ) {
      const updatedDates = state.event["date_Time"].map((data) =>
        data.id === action.id
          ? {
              ...data,
              [action.field]: { ...data[action.field], error: true },
            }
          : data
      );
      return {
        ...state,
        event: { ...state.event, date_Time: [...updatedDates] },
      };
    }

    return {
      ...state,
      [action.field]: { ...state[action.field], error: true },
    };
  }
  //dispact event title action
  if (action.type === "event/title") {
    return { ...state, title: { name: action.value, error: false } };
  }
  //dispact event category/tag action
  if (action.type === "event/category") {
    return { ...state, category: { category: action.value, error: false } };
  }
  //dispact event location action
  if (action.type === "event/location") {
    return { ...state, location: { name: action.value, error: false } };
  }
  //dispact event description action
  if (action.type === "event/description") {
    return { ...state, description: { detail: action.value, error: false } };
  }
  //dispact event start date action
  if (action.type === "event/startDate") {
    const updatedDates = state.event["date_Time"].map((data) =>
      data.id === action.id
        ? { ...data, startDate: { date: action.value, error: false } }
        : data
    );
    return {
      ...state,
      event: { ...state.event, date_Time: [...updatedDates] },
    };
  }
  //dispact event start time action
  if (action.type === "event/startTime") {
    const updatedDates = state.event["date_Time"].map((data) =>
      data.id === action.id
        ? { ...data, startTime: { time: action.value, error: false } }
        : data
    );
    return {
      ...state,
      event: { ...state.event, date_Time: [...updatedDates] },
    };
  }
  //dispact event end time action
  if (action.type === "event/endTime") {
    const updatedDates = state.event["date_Time"].map((data) =>
      data.id === action.id
        ? { ...data, endTime: { time: action.value, error: false } }
        : data
    );
    return {
      ...state,
      event: { ...state.event, date_Time: [...updatedDates] },
    };
  }
  //dispact event selling ticket type action
  if (action.type === "event/ticket/type") {
    return {
      ...state,
      ticket: { ...state.ticket, EventTicketType: action.ticketType },
    };
  }
  //dispact event selling ticket name action
  if (action.type === "event/ticket/name") {
    const updatedTicket = state.ticket.SellingTicketType.map((data) =>
      data.id === action.id
        ? { ...data, ticketName: { name: action.value, error: false } }
        : data
    );
    return {
      ...state,
      ticket: { ...state.ticket, SellingTicketType: updatedTicket },
    };
  }
  //dispact event ticket price action
  if (action.type === "event/ticket/price") {
    const updatedTicket = state.ticket.SellingTicketType.map((data) =>
      data.id === action.id
        ? { ...data, ticketPrice: { price: action.value, error: false } }
        : data
    );
    return {
      ...state,
      ticket: { ...state.ticket, SellingTicketType: updatedTicket },
    };
  }
  //dispact event session action
  if (action.type === "session/increase") {
    console.log([...state.event.date_Time]);
    return {
      ...state,
      event: {
        ...state.event,
        date_Time: [
          ...state.event.date_Time,
          {
            id: action.id,
            startTime: { time: "", error: false },
            endTime: { time: "", error: false },
            startDate: { date: "", error: false },
          },
        ],
      },
    };
  }
  //dispact event session action
  if (action.type === "session/decrease") {
    const session = state.event.date_Time.filter(
      (date) => date.id !== action.id
    );
    return {
      ...state,
      event: {
        ...state.event,
        date_Time: session,
      },
    };
  }
  //dispact event ticket action
  if (action.type === "ticket/increase") {
    return {
      ...state,
      ticket: {
        ...state.ticket,
        SellingTicketType: [
          ...state.ticket.SellingTicketType,
          {
            id: action.id,
            ticketName: { name: "", error: false },
            ticketPrice: { time: "", error: false },
          },
        ],
      },
    };
  }
  //dispact event ticket action
  if (action.type === "ticket/decrease") {
    const tickets = state.ticket.SellingTicketType.filter(
      (date) => date.id !== action.id
    );
    return {
      ...state,
      ticket: {
        ...state.ticket,
        SellingTicketType: tickets,
      },
    };
  }
  return state;
};

export default function CreateEventContextProvider({ children }) {
  const [state, dispatchFn] = useReducer(reducerFn, initialValue);
  return (
    <CreateEventContext.Provider value={{ ...state, dispatchFn }}>
      {children}
    </CreateEventContext.Provider>
  );
}

CreateEventContextProvider.propTypes = {
  children: PropTypes.element,
};
