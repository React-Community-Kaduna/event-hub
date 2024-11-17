import toast from "react-hot-toast";
import { END_POINT } from "../config/environment";
import { getEvents } from "./Auth/event-contex";

export const createEventFn = async (eventDetails,file,navigate,token,setIsLoading,dispatchFn) => {
  setIsLoading(true)
    const formData = new FormData();

    var body = {
      title: eventDetails.title.name,
      orgName: eventDetails.orgName.name,
      orgEmail: eventDetails.orgEmail.Email,
      imageUrl: file,
      category: eventDetails.category,
      location: eventDetails.location,
      date: eventDetails.session[0].startDate.date,
      startTime: eventDetails.session[0].startTime.time,
      endTime: eventDetails.session[0].endTime.time,
      description: eventDetails.description.detail,
      organizer: [
        {
          name: eventDetails.orgName.name,
          email: eventDetails.orgEmail.Email,
          contact: eventDetails.orgContact.contact,
        },
      ],
    };



    formData.append("title", body.title);
    formData.append("image", body.imageUrl);
    formData.append("area", body.category.category);
    formData.append("location", body.location.name);
    formData.append("date", body.date);
    formData.append("startTime", body.startTime);
    formData.append("endTime", body.endTime);
    formData.append("description", body.description);
    formData.append("organizer", JSON.stringify(body.organizer));


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
     
      try {
        const request = await fetch(`${END_POINT.BASE_URL}/event/create-event`, requestOptions)
        console.log(request)
        const response = await request.json()
      
        if (response?.message){
          toast.error(`Event Creation Failed due to ${response.message}`);
          setIsLoading(false)
          return null
        }
        console.log("event success", response);
          dispatchFn(getEvents())
          toast.success("Event Created Successfully")
          navigate("/")
        setIsLoading(false)
      } catch (error) {
        toast.error("Event Creation Failed");
        console.log("error", error);
        setIsLoading(false)
      }   
    }
  };