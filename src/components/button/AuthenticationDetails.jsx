import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// eslint-disable-next-line react/prop-types
export default function AuthenticationDetails() {
  return (
    <div className="hidden sm:block text-[#59595A] font-openSans lg:w-1/2 sm:w-full items-center">
      <div className="p-3">
        <h1 className="py-3 text-[20px] font-bold">Event Hub</h1>
        <p>
          Welcome to our community event platform! Easily discover and join
          events that match your interests. Whether you are looking to connect
          with others, learn new skills, or simply have fun, we have something
          for everyone. Our user-friendly interface makes it simple to find,
          create, and manage events. Join us today and be part of a vibrant
          community!
        </p>
      </div>
      <div>
        <div className="bg-white border-2 rounded-lg mt-10">
          <div className="p-3">
            <p>
              Hi, I am Mercy Ayomide, a passionate community member eager to
              connect and collaborate on events. My journey in event management
              started with a deep love for bringing people together and creating
              unforgettable experiences. I enjoy exploring new ideas and making
              every event special. Feel free to reach out to me via email or
              phone for any inquiries or collaboration opportunities. Looking
              forward to connecting with you!
            </p>
          </div>
          <div className="border-t-2 p-4 flex justify-between items-center">
            <div className="flex justify-between items-center gap-4">
              <img
                src="public/images/profile-img.jpg"
                alt="picture"
                className="w-[50px] rounded-md"
              />
              <span>Peter. V</span>
            </div>
          </div>
        </div>
        <div className="flex mt-3 gap-2 justify-end">
          <GoArrowLeft className="bg-white p-2 text-2xl rounded-sm" />
          <GoArrowRight className="bg-white p-2 text-2xl rounded-sm" />
        </div>
      </div>
    </div>
  );
}
