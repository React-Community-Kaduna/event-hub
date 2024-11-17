import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../../../services/Auth/user-context";
import { Loader } from "../../../components/Loading";

const AccountInfo = () => {
  const {user,token,loading} = useSelector((state) => state?.user);
  const {fullName,avatar,portfolio,github,bio} = user
  const [profileImage, setProfileImage] = useState();
  const [imageFile,setImageFile] = useState(null)
  const [contactInfo, setContactInfo] = useState([]);
  const [profileInfo, setProfileInfo] = useState([]);
  const dispatcher = useDispatch();
  const [firstName,...lastName] = fullName?.split(" ");

  const handleProfileImage = (e) => {
    setImageFile(e.target.files[0])
    const imageFile = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);

    fileReader.onload = (e) => {
      setProfileImage(e.target.result);
      console.log(e.target.result)
    };
    // setProfileImage(e.target.files[0]);
    console.log(e.target.files[0]);

  };

  const handleContactInfo = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleProfileInfo = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  const  handleSubmit =  (e) => {
    e.preventDefault();
    // if(profileInfo.length < 4 || contactInfo.length < 5) {
    //   alert("Fill form completely");
    //   return;
    // }
    let data = {};
    if(profileInfo.firstname){
      data.fullName = profileInfo.firstname ?? firstName + " " + profileInfo.lastname ?? lastName
    }
    if(profileInfo.lastname){
      data.fullName = profileInfo.firstname ??  firstName + " " + profileInfo.lastname ?? lastName
    }
    if(profileInfo.bio){
      data.bio = profileInfo.bio
    }
    if(profileInfo.website){
      data.portfolio = profileInfo.website
    }
    if(contactInfo.number){
      data.contact = contactInfo.number
    }
    if(imageFile){
      data.avatar = imageFile
    } 
    if(profileInfo.github){
      data.github = profileInfo.github
    }
    console.log(data);
    dispatcher(updateUserDetails({data,token}));
    //updateUser(data,token,setIsLoading)
 }

  return (
    <>
    {/* {loading && <Loader/> } */}
    <main className="px-3">
      <h2 className="font-bold text-gray-800 pb-2 text-3xl my-4 w-full border-b-[2px] border-gray-300">
        Account Information
      </h2>

      <div className="profileImage max-w-[500px] lg:px-8 md:px-4 px-1 flex flex-col items-center justify-center mx-auto my-8">
        <h3 className="text-2xl font-bold my-4">Profile Photo</h3>
        <div className="image lg:w-[200px] md:w-[200px] w-[200px] h-[200px] border relative rounded-full bg-gray-200 flex items-center justify-center">
            <img
              className="w-full h-full rounded-full"
              src={profileImage?profileImage: avatar}
              alt="Profile Image"
            />
          <div className="imageBtn absolute cursor-pointer border border-gray-800 overflow-hidden w-[45px] h-[45px] rounded-full bottom-[15px] right-[0px]">
            <img
              className="absolute p-2 cursor-pointer bg-white/90 rounded-full w-[45px]"
              src="https://img.icons8.com/ios-filled/100/camera--v3.png"
              alt="camera--v3"
            />
            <input
              className="absolute cursor-pointer top-[50%] -translate-y-[50%] opacity-0"
              type="file"
              accept="image/*"
              onChange={handleProfileImage}
              placeholder="file"
            />
          </div>
        </div>
      </div>

      <div className="profileInfo max-w-[500px] mx-auto my-8 py-8">
        <h3 className="text-2xl font-bold mb-4">Profile Information</h3>

        <form className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between firstname">
            <label className="w-[30%]" htmlFor="firstname">
              First Name:
            </label>
            <input
              onChange={handleProfileInfo}
              className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[45px]"
              type="text"
              name="firstname"
              id="firstname"
              defaultValue={firstName??""}
              placeholder="Enter first name"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between lastname">
            <label className="w-[30%]" htmlFor="lastname">
              Last Name:
            </label>
            <input
              onChange={handleProfileInfo}
              className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[45px]"
              type="text"
              name="lastname"
              id="lastname"
              defaultValue={lastName.join(" ")??""} 
              placeholder="Enter last name"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between website">
            <label className="w-[30%]" htmlFor="website">
              Website:
            </label>
            <input
              onChange={handleProfileInfo}
              className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[45px]"
              type="text"
              name="website"
              id="website"
              defaultValue={portfolio}
              placeholder="Enter website"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between company">
            <label className="w-[30%]" htmlFor="github">
              Github:
            </label>
            <input
              onChange={handleProfileInfo}
              className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[45px]"
              type="text"
              name="github"
              defaultValue={github}
              id="github"
              placeholder="Enter Github"
            />
          </div>
          <div className="flex flex-wrap items-center justify-start firstname">
            <label className="w-[30%]" htmlFor="number">
              Phone Number:
            </label>
            <input
              onChange={handleContactInfo}
              className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[45px]"
              type="text"
              name="number"
              id="number"
              placeholder="Enter phone number"
              defaultValue={user.contact}
            />
          </div>
          <div className="flex flex-wrap items-center justify-between company">
            <label className="w-[30%]" htmlFor="bio">
              bio:
            </label>
            <textarea
              onChange={handleProfileInfo}
              className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-32 py-3"
              name="bio"
              defaultValue={bio}
              id="bio"
              placeholder="tell us about yourself"
            />
          </div>
        </form>
      </div>
{/* 
      <div className="profileContact max-w-[500px] mx-auto my-8 py-4">
        <h3 className="text-2xl font-bold">Contact Details</h3>
        <p className="mb-4 text-gray-700">
          These details are private and only used to contact you for ticketing
          or prizes.
        </p>

        <form className="flex flex-col gap-4">
         

          <div className="flex flex-wrap items-start justify-between lastname">
            <label className="w-[30%]" htmlFor="address">
              Address:
            </label>
            <textarea
              onChange={handleContactInfo}
              value={""}
              className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[70px]"
              type="text"
              name="address"
              id="address"
              placeholder="Enter address"
            >
              {" "}
            </textarea>
          </div>

          <div className="flex flex-wrap items-center justify-between website">
            <label className="w-[30%]" htmlFor="city">
              City/Town:
            </label>
            <input
              onChange={handleContactInfo}
              className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[45px]"
              type="text"
              name="city"
              id="city"
              placeholder="Enter city"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between company">
            <label className="w-[30%]" htmlFor="country">
              Country:
            </label>
            <input
              onChange={handleContactInfo}
              className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[45px]"
              type="text"
              name="country"
              id="country"
              placeholder="Enter country"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between company">
            <label className="w-[30%]" htmlFor="pincode">
              Pincode:
            </label>
            <input
              onChange={handleContactInfo}
              className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[45px]"
              type="text"
              name="pincode"
              id="pincode"
              placeholder="Enter pincode"
            />
          </div>
        </form>
      </div> */}

      <div className="formBtn max-w-[500px] mx-auto my-8 text-left">
        <button
          className="bg-[#3557C2]/90 text-white px-8 hover:bg-[#3557C2] transition-all duration-400 py-3 rounded-[8px] disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Save my profile"}
        </button>
      </div>
    </main>
    </>)
};

export default AccountInfo;
