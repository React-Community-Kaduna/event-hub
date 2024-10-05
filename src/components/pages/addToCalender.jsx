import { Button } from "@mui/material";
import React from "react";
import moment from "moment";
const CalendarIntegration = ({ event }) => {
  const formattedDate = moment(event?.date).format("dddd MMM DD YYYY");

  const generateICSFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event?.title}
LOCATION:${event?.location}
DESCRIPTION:${event?.description}
DTSTART:${formatDate(event?.date, event.startTime)}
DTEND:${formatDate(event?.date, event.endTime, 1)}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${event.title}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (date, time, addHours = 0) => {
    const eventDate = new Date(`${date.slice(0, 10)}T${time}`);
    console.log(date.slice(0, 10), "time", time, eventDate, "event date");
    eventDate.setHours(eventDate.getHours() + addHours);
    return eventDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  return <Button onClick={generateICSFile}>Add to Calendar</Button>;
};

export default CalendarIntegration;
