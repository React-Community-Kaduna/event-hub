import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

export default function TimeInput({
  label,
  type,
  id,
  placeholder,
  element,
  inputHandler,
  value,
  empty,
  emptyHandler,
}) {
  return (
    <div className="grid gap-2 w-full">
      <label
        htmlFor={id}
        className="text-lg inline-flex items-center lg:items-start font-normal lg:font-semibold text-[#2D2C3C] capitalize"
      >
        {label}
        <FaStar color="#D6111A" fontSize="10px" className="ml-2 lg:ml-1" />
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center px-[10px] pointer-events-none rounded-s-lg bg-[#EEEEEE] ml-[1px] my-[1px]">
          {element}
        </div>
        <input
          type="text"
          id={id}
          className="border border-[#828282] rounded-md outline-none block w-full ps-11 p-2.5 placeholder-[#ACACAC] h-11"
          placeholder={placeholder}
          onFocus={(e) => (e.target.type = type)}
          onBlur={(e) => {
            e.target.value === ""
              ? (e.target.type = "text")
              : (e.target.type = type);
            if (e.target.value === "") {
              emptyHandler("event/empty", id);
            }
          }}
          value={value}
          onChange={(e) => {
            inputHandler(`event/${id}`, e.target.value);
          }}
          required
        />
        {empty && (
          <p className="text-red-600 absolute z-0 ">{label} is required</p>
        )}
      </div>
    </div>
  );
}

TimeInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  element: PropTypes.element,
  inputHandler: PropTypes.func,
  value: PropTypes.string,
  emptyHandler: PropTypes.func,
  empty: PropTypes.bool,
};
