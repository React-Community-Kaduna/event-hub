import TimeInput from "../createEvent/TimeInput";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import useEvent from "../../hooks/useEvent";
import PropTypes from "prop-types";

export default function Session({ deleteSession = false, id }) {
  //event sessions
  const { dispatchFn, session } = useEvent();
  //remove ticket input
  const reduceSesions = function () {
    dispatchFn({ type: "session/decrease", id });
  };
  //dispatch actions for inputs values
  const inputValue = (type, value) => {
    dispatchFn({ type: type, value, id });
  };
  //dispatch actions for empty input fiels (onBlur and onSubmit)
  const empty = (type, field) => {
    dispatchFn({ type: type, field, id });
  };

  const findDate = session.find((data) => data.id === id);
  return (
    <div className="flex w-full sm:flex-nowrap gap-4 flex-wrap items-center">
      <TimeInput
        label="Start Date"
        id="startDate"
        type="date"
        placeholder="DD/MM/YY"
        value={findDate.startDate?.date}
        element={<LuCalendarDays className="text-[#5A5A5A] text-xl" />}
        inputHandler={inputValue}
        emptyHandler={empty}
        empty={findDate.startDate?.error}
      />
      <TimeInput
        label="Start time"
        id="startTime"
        type="time"
        placeholder="12:00 AM"
        value={findDate.startTime?.time}
        inputHandler={inputValue}
        empty={findDate.startTime?.error}
        emptyHandler={empty}
        element={<MdAccessTime className="text-[#5A5A5A] text-xl" />}
      />
      <TimeInput
        label="end time"
        id="endTime"
        type="time"
        placeholder="12:00 AM"
        value={findDate.endTime?.time}
        inputHandler={inputValue}
        empty={findDate.endTime?.error}
        emptyHandler={empty}
        element={<MdAccessTime className="text-[#5A5A5A] text-xl" />}
      />
      <button disabled={!deleteSession} onClick={reduceSesions}>
        <IoIosRemoveCircleOutline
          className={`${!deleteSession ? "invisible" : "visible"} text-2xl`}
        />
      </button>
    </div>
  );
}

Session.propTypes = {
  deleteSession: PropTypes.number,
  id: PropTypes.number,
};
