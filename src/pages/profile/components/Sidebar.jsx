import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FaXmark } from 'react-icons/fa6';

// eslint-disable-next-line react/prop-types
const Sidebar = ({activePath}) => {
  const [active, setActive] = useState(false)
  const [settingOptions, setSettingOptions] = useState([
    {
      name: "profile",
      active: true,
    },
    {
      name: "account info",
      active: false,
    },
    {
      name: "change email",
      active: false,
    },
    {
      name: "password",
      active: false,
    },
  ]);

  const toggleActive = (arr, val) => {
    let newArr = []
    arr.forEach((el) => {
      if(el.name == val) {
        newArr.push({
          name: el.name,
          active: true,
        })
      } else {
        newArr.push({
          name: el.name,
          active: false
        })
      }
    })
    setSettingOptions(newArr);
  }
  // const settingOptions = 

  return (
   <>
    <span className="fixed z-20 left-5 bg-red-5000 visible" onClick={() => setActive(!active)}>
      <div className='text-3xl bg-white p-2'>
        {active? <FaXmark/>:<BiMenu/>}
      </div>
    </span>
    <div className={`${!active?"w-20 transition-all duration-200":"w-full"} transition-all duration-200 absolute z-10 lg:bg-gray-100 md:bg-gray-100 bg-white pt-10 sm:pt-0  border-b  max-w-60`}>
      {active && <>
        <h2 className="font-bold flex items-center justify-between md:text-left md:text-xl lg:mb-10 md:mt-4 p-6">
        <span>Account Settings</span>
      </h2>
      <div className={`settingOptions lg:flex md:flex gap-3 flex-wrap  bg-white ${active ? 'visible text-center md:text-start' : 'hidden'}`}>
        {settingOptions.map((opt, _i) => (
            <p key={_i} className={`capitalize text-lg cursor-pointer w-full px-6 py-3 ${opt.active ? 'bg-white lg:font-[500] md:font-[500] font-bold' : 'bg-none'}`} onClick={() => {
              toggleActive(settingOptions, opt.name)
              activePath({
                path: opt.name
              })
            }}>
              {opt.name}
            </p>
        ))}
      </div>
      </>}
    </div>
   </>
  )
}
Sidebar.PropTypes = {
  activePath: PropTypes.func
};
export default Sidebar;