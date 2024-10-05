import { RxCalendar } from "react-icons/rx";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import PropTypes from "prop-types";
import { useView } from "../../hooks/useView";

export default function Review({ eventDetails }) {
  //Event details
  const {
    title: { name: Title },
    banner: { image },
    imageUrl: { imageUrl },
    session,
    description: { detail },
    location: { name: place },
    EventTicketType,
    SellingTicketType,
    orgContact: { name: Contact },
    orgEmail: { Email },
    orgName: { name: Name },
  } = eventDetails;

  //effect to makes component view start from the top of the page
  useView();

  const handleSubmit = async () => {
    console.log(eventDetails);
    const formData = new FormData();

    var body = {
      title: eventDetails.title.name,
      orgName: eventDetails.orgName.name,
      orgEmail: eventDetails.orgEmail.Email,
      imageUrl: eventDetails.imageUrl,
      category: eventDetails.category.category,
      location: eventDetails.location.name,
      date: session[0].startDate.date,
      startTime: session[0].startTime.time,
      endTime: session[0].endTime.time,
      description: eventDetails.description.detail,
      organizer: [
        {
          name: eventDetails.orgName.name,
          email: eventDetails.orgEmail.Email,
        },
      ],
    };

    // const organizer = [{ name: body.orgName, email: body.orgEmail }];

    formData.append("title", body.title);
    formData.append("image", body.imageUrl.imageUrl);
    formData.append("category", body.category);
    formData.append("location", body.location);
    formData.append("date", body.date);
    formData.append("startTime", body.startTime);
    formData.append("endTime", body.endTime);
    formData.append("description", body.description);
    formData.append("organizer", JSON.stringify(body.organizer));
    console.log("body", body);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    var token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM3MTg5NTY0ZDRkZDJiZjg5NWQzNDYiLCJpYXQiOjE3MjgwNDA3MDksImV4cCI6MTczMDYzMjcwOX0.hKQ_dip2YmatYK8lyA6sYPy6URzbSgsoZgL5fYXNswQ";

    if (token) {
      // Verify token on the backend
      var myHeaders = new Headers();
      myHeaders.append("x-auth-token", token);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: formData,
      };
      await fetch(
        `http://localhost:4000/api/event/create-event`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.success === true) {
            console.log("event success", result.data);
          } else {
            console.log("error", result.message);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  return (
    <>
      <section className="capitalize w-full lg:px-16 pt-6 mx-auto max-w-4xl text-[#2D2C3C]">
        <h2 className="mb-10 lg:mb-2 text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-medium text-center lg:text-start">
          Nearly there! Check everything’s correct.
        </h2>
        <div className="p-6 border-[#2B293D] border-[3px] rounded-2xl my-8">
          <div className="h-[300px] rounded-md">
            <img
              src={image}
              className="m-auto w-full object-cover h-full rounded-md flex justify-center items-center"
            />
          </div>
          <h1 className="my-4 capitalize text-center md:text-start text-2xl font-bold">
            {Title}
          </h1>
          <div className="w-full flex md:flex-row gap-3 md:gap-0 flex-col justify-between items-start">
            <div className="text-sm grid gap-3">
              <h3 className="font-medium text-xl capitalize">date and time</h3>
              {session.map((date, index) => {
                return (
                  <div key={index}>
                    <h5 className="flex items-center gap-2">
                      {" "}
                      <RxCalendar />
                      {date.startDate.date}
                    </h5>
                    <h5 className="flex items-center gap-2">
                      {" "}
                      <MdOutlineAccessTime />
                      {date.startTime.time} - {date.endTime.time}
                    </h5>
                    <h5 className="ml-5 text-[#4539B4]">
                      <a
                        href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${Title}&dates=${date.startDate.date}T${date.startTime.time}Z/${date.startDate.date}T${date.endTime.time}Z&details=${detail}&location=${place}`}
                        target="_blank"
                      >
                        + add to calendar
                      </a>
                    </h5>
                  </div>
                );
              })}
            </div>
            <div className="text-sm grid gap-3 h-fit">
              <h3 className="font-medium text-xl">ticket information</h3>
              {SellingTicketType.map((ticket) => {
                return (
                  <h5 key={ticket.id} className="flex items-center gap-2">
                    <IoTicket /> {EventTicketType}: {ticket.ticketName.name} /
                    {ticket.ticketPrice.price}
                  </h5>
                );
              })}
            </div>
          </div>
          <div className="mt-8 grid gap-3">
            <h3 className="font-medium text-xl capitalize">{place}</h3>
            <h5 className="inline-flex text-sm items-center gap-2">
              <CiLocationOn /> address
            </h5>
            <div className="w-full max-w-xl h-80  rounded-md mx-auto lg:mx-0 border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31383.264972843925!2d7.4186407276351!3d10.50790263235687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d355834371775%3A0x480195979abfe174!2sKaduna%20800283%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1724044659683!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="mt-8 grid gap-3">
            <h3 className="font-medium text-xl">hosted by</h3>
            <div className="grid grid-cols-[.5fr_2fr] max-w-64 gap-3">
              <div className="rounded-md bg-[#B9B9B9]" />
              <div className="grid gap-2">
                <h3 className="font-semibold text-sm">Host Name</h3>
                <div className="flex gap-1">
                  <button className="capitalize px-3  py-[2px] border">
                    contact
                  </button>
                  <button className="capitalize px-3 py-[2px] border">
                    + follow
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-3">
            <h3 className="font-medium text-xl capitalize">
              Event Description
            </h3>
            <p className="text-[#5A5A5A] font-normal text-sm">{detail}</p>
          </div>
        </div>
        <div className="btn btn-primary" onClick={handleSubmit}>
          Create
        </div>
      </section>
    </>
  );
}

Review.propTypes = {
  eventDetails: PropTypes.object,
};
