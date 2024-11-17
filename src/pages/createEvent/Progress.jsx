import PropTypes from "prop-types";
export default function Progress({route}) {
  const pseudoStyle = route==1
    ? "before:w-1/2"
    : route==2
    ? "before:w-3/4"
    : route==3
    ? "before:w-full"
    : "before:w-1/4";

  return (
    <div className="z-0 mt-4 capitalize">
     <div className="relative">
     <span
        className={`w-full inline-block  h-[3px] bg-[#6F6F6F] before:absolute before:bg-[#2B293D] before:h-[4px] ${pseudoStyle}`}
      ></span>
     </div>
      <div className="flex justify-evenly">
        <div
          className={`transition-all ease-in-out text-[#2B293D] relative flex flex-col items-center -top-[15px]`}
        >
          <span className="border-[#2B293D] w-4 h-4 rounded-full bg-white border-solid  border-4"></span>
          <span>edit</span>
        </div>
        <div
          className={`transition-all ease-in-out ${
            route >= 1
              ? "text-[#2B293D]"
              : "text-[#6F6F6F]"
          } relative flex flex-col items-center -top-[15px]`}
        >
          <span
            className={`${
              route >= 1
                ? "border-[#2B293D]"
                : "border-[#6F6F6F]"
            } w-4 h-4 rounded-full bg-white border-solid  border-4`}
          ></span>
          <span>banner</span>
        </div>
        <div
          className={`transition-all ease-in-out ${
            route >= 2
              ? "text-[#2B293D]"
              : "text-[#6F6F6F]"
          } relative flex flex-col items-center -top-[15px]`}
        >
          <span
            className={`${
              route >= 2
                ? "border-[#2B293D]"
                : "border-[#6F6F6F]"
            } w-4 h-4 rounded-full bg-white border-solid  border-4`}
          ></span>
          <span>Ticketing</span>
        </div>
        <div
          className={`transition-all ease-in-out ${
            route === 3
              ? "text-[#2B293D]"
              : "text-[#6F6F6F]"
          } relative flex flex-col items-center -top-[15px]`}
        >
          <span
            className={`${
              route === 3
                ? "border-[#2B293D]"
                : "border-[#6F6F6F]"
            } w-4 h-4 rounded-full bg-white border-solid  border-4`}
          ></span>
          <span>review</span>
        </div>
      </div>
    </div>
  );
}

Progress.propTypes = {
  route:PropTypes.number
};