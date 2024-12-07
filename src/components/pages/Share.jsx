import { BsCopy } from "react-icons/bs";
import SocialShare from "../SocialShare";
import toast from "react-hot-toast";
import { HiOutlineXMark } from "react-icons/hi2";

export default function Share({title,location,modalHandler}) {
  const url = window.location.href;
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            toast.success('Copied!');
        } catch (error) {
            toast.error('Failed to copy!, try aagin');
        }
    };
  return (
        <div
          className="bg-white w-11/12 md:w-[75vw] sm:w-[90vw] transition-all relative"
          onClick={(e) => e.stopPropagation()}
        >
          <HiOutlineXMark className="absolute top-4 text-3xl sm:text-4xl right-4" onClick={modalHandler}/>
          <div className="text-center text-[#2D2C3C]">
            <h1 className="text-[1.5rem] py-[0.7rem]">Share with friends</h1>
            <hr/>
            <SocialShare url={url} title={`hey am going to ${title} at ${location}`} /> 
            <div className="flex items-center justify-center mx-auto border-[#F1F3F6] border-[2px] w-11/12 sm:mx-[1rem] px-[1rem] text-start text-[#2D2C3C] mb-[5rem] bg-gray-100">
              <div>
                <h1 className="font-[300]">Event URL</h1>
                <h1 className="overflow-hidden text-ellipsis">{url}</h1>
              </div>
              <BsCopy className="text-lg cursor-pointer hover:text-[#3557c2]"  onClick={handleCopy}/>
            </div>
          </div>
        </div>
  );
}
