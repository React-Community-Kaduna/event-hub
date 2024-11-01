import googlePlay from '../assets/googlePlay.png'
import apple from '../assets/apple.png'
import { Link } from 'react-router-dom';
import { appRoutes } from '../config/routeMgt/RoutePaths';


const Footer = () => {
  return (
    <div className="bg-[var(--app-blue)]  static right-0 left-0 bottom-0 pt-10 lg:px-20 px-5 pb-3 text-[var(--app-grey)] footer ">
      <div className="flex justify-between pb-10 max-md:grid max-md:grid-cols-3 max-md:gap-y-5 flex-wrap">
        <div className="flex flex-col gap-y-6 footerHeader">
          <h2 className="text-white font-semibold text-sm lg:text-xl">Company Info</h2>
          <div className="flex flex-col gap-y-2 text-xs lg:text-lg cursor-pointer">
            <Link to={appRoutes.aboutUs}>About Us</Link>
            <Link to={appRoutes.contactUs}>Contact Us</Link>
            <p>FAQs</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 footerHeader">
          <h2 className="text-white text-sm font-semibold lg:text-xl">Help</h2>
          <div className="flex flex-col gap-y-2 text-xs lg:text-lg cursor-pointer">
            <p>Account Support</p>
            <p>Listing Events</p>
            <p>Event Ticketing</p>
            <p>Ticket Purchase Terms & Conditions</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 footerHeader">
          <h2 className="text-white font-semibold text-sm lg:text-xl">Categories</h2>
          <div className="flex flex-col gap-y-2 text-xs lg:text-lg cursor-pointer">
            <p>Technology & Innovation</p>
            <p>Entertainment</p>
            <p>Education & Business</p>
            <p>Cultural & Arts</p>
            <p>Governmental</p>
            <p>Sports & Fitness</p>
            <p>Workshops, Conferences & Classes</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 footerHeader col-auto">
          <h2 className="text-white font-semibold text-sm lg:text-xl">Follow Us</h2>
          <div className="flex flex-col gap-y-2 text-xs lg:text-lg cursor-pointer">
            <p>Facebook</p>
            <p>Instagram</p>
            <a href='https://x.com/Fitechcommunity' target='_blank'>Twitter</a>
            <a href='https://www.youtube.com/@FitechCommunity' target='_blank'>Youtube</a>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 footerHeader col-span-2">
          <h2 className="text-white font-semibold text-sm lg:text-xl">Download The App</h2>
          <div className="flex flex-col gap-y-5 text-xs">
            <div className="border border-[var(--app-grey)] rounded-md py-3 px-[14px] flex gap-x-5 w-fit">
              <img alt="google play" src={googlePlay} height={48} width={48} className="object-contain max-lg:w-5 max-lg:h-5" />
              <div>
                <p className="lg:text-xs text-[10px]">Get it on</p>
                <p className=" lg:text-xl text-xs">Google Play</p>
              </div>
            </div>
            <div className="border border-[var(--app-grey)] rounded-md py-3 px-[14px] flex gap-x-5 w-fit ">
              <img alt="apple" src={apple} height={50} width={50} className="object-contain max-lg:w-5 max-lg:h-5" />
              <div>
                <p className="lg:text-xs text-[10px]">Download on the</p>
                <p className=" lg:text-xl text-xs">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-t-[var(--app-grey-text)] pt-3 text-center">2024 Name. All rights reserved.</div>
    </div>
  );
}



export default Footer