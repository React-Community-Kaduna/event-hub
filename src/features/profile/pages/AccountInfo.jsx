import { useState } from "react";

const AccountInfo = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [contactInfo, setContactInfo] = useState([]);
  const [profileInfo, setProfileInfo] = useState([]);

  const handleProfileImage = (e) => {
    const imageFile = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);

    fileReader.onload = (e) => {
      setProfileImage(e.target.result);
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

  const handleSubmit = () => {
    if (profileInfo.length < 4 || contactInfo.length < 5) {
      alert("Fill form completely");
      return;
    }
    console.log(profileInfo);
    console.log(contactInfo);
    console.log(profileImage);
  };

  return (
    <main className="px-3">
      <h2 className="font-bold text-gray-800 pb-2 text-3xl my-4 w-full border-b-[2px] border-gray-300">
        Account Information
      </h2>

      <div className="profileImage max-w-[500px] lg:px-8 md:px-4 px-1 flex flex-col items-center justify-center mx-auto my-8">
        <h3 className="text-2xl font-bold my-4">Profile Photo</h3>
        <div className="image lg:w-[200px] md:w-[200px] w-[200px] h-[200px] border relative rounded-full bg-gray-200 flex items-center justify-center">
          {profileImage ? (
            <img
              className="w-full h-full rounded-full"
              src={profileImage}
              alt="Profile Image"
            />
          ) : (
            <img
              className="w-[120px] h-[120px]"
              src="https://img.icons8.com/fluency-systems-filled/96/ffffff/user.png"
              alt="user"
            />
          )}

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
              placeholder="Enter website"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between company">
            <label className="w-[30%]" htmlFor="company">
              Company:
            </label>
            <input
              onChange={handleProfileInfo}
              className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[45px]"
              type="text"
              name="company"
              id="company"
              placeholder="Enter company name"
            />
          </div>
        </form>
      </div>

      <div className="profileContact max-w-[500px] mx-auto my-8 py-4">
        <h3 className="text-2xl font-bold">Contact Details</h3>
        <p className="mb-4 text-gray-700">
          These details are private and only used to contact you for ticketing
          or prizes.
        </p>

        <form className="flex flex-col gap-4">
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
            />
          </div>

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
      </div>

      <div className="formBtn max-w-[500px] mx-auto my-8 text-left">
        <button
          className="bg-[#3557C2]/90 text-white px-8 hover:bg-[#3557C2] transition-all duration-400 py-3 rounded-[8px]"
          onClick={handleSubmit}
        >
          Save My Profile
        </button>
      </div>
    </main>
  );
};

export default AccountInfo;
