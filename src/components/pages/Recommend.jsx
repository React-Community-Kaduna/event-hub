import { NavLink } from "react-router-dom";
import recommend from "../../../src/assets/images/recommend.png";
import { FaArrowRight } from "react-icons/fa6";
import { appRoutes } from "../../config/routeMgt/RoutePaths";

export default function Recommend() {
  return (
    <div className="recommend relative min-h-[250px] font-montserrat lg:px-12 md:px-8 px-4 my-4 flex items-center justify-center text-center">
      <div className="m-auto lg:w-[85%] md:w-[90%] w-full h-full absolute lg:rounded-[12px] md:rounded-[8px] rounded-[0px] overflow-hidden">
        <img src={recommend} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="text-[#2D2C3C] relative z-10">
        <h1 className="text-[24px] font-[700]">
          Events specially curated for you!
        </h1>
        <p className="text-sm">
          Get event suggestions tailored to your interests! Don&apos;t let your
          favorite events slip away.
        </p>
        <NavLink to={appRoutes.search} className="mt-[2rem] flex justify-center m-auto bg-[#2B293D] text-[#FFE047] px-4 py-3 rounded-[5px] items-center gap-4 text-md min-w-[170px] w-fit">
          Get Started <FaArrowRight />
        </NavLink>
      </div>
    </div>
  )
}
