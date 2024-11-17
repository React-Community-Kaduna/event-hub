import { useState } from "react";
import {Link} from "react-router-dom";

const Settings = () => {
  const [checked, setChecked] = useState([
    {
      name: "events",
      active: false,
      text: "get event notifications"
    },
    {
      name: "offers",
      active: false,
      text: "get offers notification"
    },
    {
      name: "dark mode",
      active: false,
      text: "dark mode"
    }
  ]);

  const isChecked = (notif) => {
    setChecked((prev) => {
      return prev.map((el) => {
        if (el.name === notif) {
          return {...el, active:!el.active };
        }
        return el;
      });
    });
  }
  return (
    <main className="lg:px-8 md:px-4 px-1">
      <div className="settingsOptions flex flex-col gap-4 mb-4">
        {checked.map((notif, _i) => (
          <div key={_i} className="notifications flex items-center justify-between lg:w-[500px] md:w-[500px] w-full gap-40 text-gray-700">
          <p className="capitalize">{notif.text}</p>
          <div
            className={`cursor-pointer transition-all duration-400 customCheckbox border w-[50px] h-[27px] rounded-[30px] relative ${notif.active ? "bg-[#191970]":"bg-gray-400"}`}
            onClick={() => isChecked(notif.name)}
          >
            <p className={`transition-all duration-400 absolute top-[50%] -translate-y-[50%] ball bg-white w-[20px] h-[20px] rounded-full ${notif.active ? "translate-x-[25px]":"translate-x-[4px]"}`}></p>
          </div>
        </div>
        ))}
      </div>
      <Link className="underline underline-offset-4" to="/">Log Out</Link>
    </main>
  )
}

export default Settings;