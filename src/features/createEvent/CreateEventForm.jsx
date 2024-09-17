import { FaStar } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import PropTypes from "prop-types";
import Label from "../createEvent/Label";

import { AppButton } from "../../components/button/AppButton";
import useEvent from "../../hooks/useEvent";
import Session from "./Session";
import EventCategoryOptions from "./EventCategoryOptions";

export default function CreateEventForm({ navigate }) {
  // useEvent context to to handle form errors
  const {
    session,
    dispatchFn,
    title: { name: Title, error: titleError },
    category: { category: categories, error: categoryError },
    location: { name, error: locationError },
    description: { detail, error: descriptionError },
    eventType: { type },
  } = useEvent();
  // dispatch actions for event sessions
  const moreSesions = function () {
    const id = Math.random() * 1990;
    dispatchFn({ type: "session/increase", id });
  };
  //dispatch actions for inputs values
  const inputValue = (type, value) => {
    dispatchFn({ type: type, value });
  };
  //dispatch actions for empty input fiels (onBlur and onSubmit)
  const empty = (field) => {
    dispatchFn({ type: "event/empty", field });
  };

  const onSubmit = function () {
    //prop to navigate to the next create form component
    navigate();
  };

  return (
    <form className="capitalize  lg:px-16 accent-[#aba6da]" onSubmit={onSubmit}>
      <div className="lg:w-full max-w-4xl mb-8">
        <h2 className="mb-2 lg:ml-[14.3rem] text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-semibold">
          Event Details
        </h2>
        <Label title="event title" empty={titleError}>
          <input
            type="text"
            placeholder="Enter the name of your event"
            className="w-full lg:w-4/5 border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start"
            required
            value={Title}
            onChange={(e) => {
              inputValue("event/title", e.target.value);
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                empty("title");
              }
            }}
          />
        </Label>
        <Label title="event category" empty={categoryError}>
          <GoChevronDown className="absolute  top-11 lg:top-4 right-8 sm:right-20 lg:right-4" />
          <select
            className="w-full lg:w-4/5 border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start appearance-none "
            required
            onChange={(e) => {
              inputValue("event/category", e.target.value);
            }}
            value={categories}
          >
            <EventCategoryOptions />
          </select>
        </Label>
      </div>
      <div className="lg:w-full max-w-4xl mb-4">
        <h2 className="mb-2 lg:ml-[14.3rem] text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-semibold">
          date & time
        </h2>
        {/* <div className=" flex gap-[2%] [@media(min-width:360px)]:gap-4  [@media(min-width:430px)]:gap-8 lg:mx-20 px-0 sm:px-11 text-sm">
          <h3 className="sm:flex flex-none inline-flex items-center lg:items-start font-normal lg:font-semibold">
            event types <FaStar color="#D6111A" fontSize="10px" />
          </h3>
          <div className="grid gap-2">
            <div className="flex gap-2">
              <div className="flex-none sm:flex">
                <input
                  name="eventType"
                  id="single"
                  type="radio"
                  value="single event"
                  required
                  // checked={eventType === "single event"}
                  onChange={(e) => {
                    inputValue("event/eventType", e.target.value);
                  }}
                />
                <label
                  className="font-normal lg:font-semibold ml-1"
                  htmlFor="single"
                >
                  single event
                </label>
              </div>

              <div className="flex-none sm:flex relative">
                <input
                  type="radio"
                  name="eventType"
                  id="recurring"
                  value="recurring event"
                  // checked={eventType === "recurring event"}
                  required
                  onChange={(e) => {
                    inputValue("event/eventType", e.target.value);
                  }}
                />
                <label className="font-normal lg:font-semibold ml-1">
                  recurring event
                </label>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="relative max-w-6xl sm:pl-12 lg:pl-[8.5rem] flex justify-between lg:gap-8 px-0 text-sm mb-14">
        <h3 className="hidden lg:flex items-center lg:items-start font-normal lg:font-semibold">
          session(s) <FaStar color="#D6111A" fontSize="10px" />
        </h3>
        <div className="w-full grid gap-4">
          {session.map((data, index) => (
            <Session key={data.id} id={data.id} deleteSession={index} />
          ))}
        </div>
        {/* {type !== "single event" && type !== "" && (
          <HiOutlinePlusCircle
            className="z-0 absolute right-0 top-0 block text-2xl font-normal lg:font-semibold "
            onClick={moreSesions}
          />
        )} */}
      </div>
      <div className="lg:w-full max-w-4xl mb-14">
        <h2 className="mb-2 lg:ml-[14.3rem] text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-semibold">
          location
        </h2>
        <div className="flex gap-1 lg:gap-3 lg:items-center items-start lg:justify-end flex-col lg:flex-row w-full max-w-lg lg:max-w-none mt-4 relative">
          <Label
            empty={locationError}
            element={
              <label className="inline-flex text-sm items-center lg:items-start font-normal lg:font-semibold">
                where will your <br className="hidden lg:block" /> event take
                place?
                <FaStar
                  color="#D6111A"
                  fontSize="10px"
                  className="ml-2 lg:ml-1"
                />
              </label>
            }
          >
            <input
              list="datalist-cities"
              name="datalist-city"
              type="text"
              placeholder="please select one"
              className="w-full lg:w-4/5 border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start"
              required
              value={name}
              onChange={(e) => {
                inputValue("event/location", e.target.value);
              }}
              onBlur={(e) => {
                if (e.target.value === "") {
                  empty("location");
                }
              }}
            />
            <datalist id="datalist-cities">
              <option value="canada"></option>
              <option value="london"></option>
              <option value="india"></option>
              <option value="cape"></option>
              <option value="france"></option>
            </datalist>
          </Label>
        </div>
      </div>
      <div className="lg:w-full max-w-6xl mb-14">
        <h2 className="mb-2 lg:ml-[14.3rem] text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-semibold">
          additional information
        </h2>
        <div className="sm:pl-12 lg:pl-[5.5rem] relative flex lg:gap-1  px-0  text-sm mb-8 flex-col lg:flex-row max-w-5x">
          <label className="inline-flex text-sm items-center lg:items-start font-normal lg:font-semibold lg:w-[10.5rem]">
            Event Description
            <FaStar color="#D6111A" fontSize="10px" className="ml-2 lg:ml-1" />
          </label>
          <textarea
            className="rounded-xl p-4 w-full h-44 border borer-[#828282] text-[#828282] "
            placeholder="Describe what's special about your event & other important details."
            required
            value={detail}
            onChange={(e) => {
              inputValue("event/description", e.target.value);
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                empty("description");
              }
            }}
          />
          {descriptionError && (
            <p className="text-red-600 absolute z-0 md:left-60 md:-bottom-6 -bottom-6">
              Event Description is required
            </p>
          )}
        </div>
        <div className="grid justify-end">
          <AppButton
            label="save & continue"
            containerStyle="capitalize"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
}

CreateEventForm.propTypes = {
  navigate: PropTypes.func,
};
