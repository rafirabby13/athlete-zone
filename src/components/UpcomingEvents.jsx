/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import EventCard from "./EventCard.jsx";
import { AuthContext } from "../Providers/AuthProvider.jsx";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("./events.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setEvents(data);
      });
  }, []);
  return (
    <div>
      <div className="w-3/4 mx-auto space-y-8 py-10 text-center">
        <h1 className="text-4xl font-bold p-4 shadow-purple-600 shadow-md">
          Upcoming Events
        </h1>
        <p className="text-xl">
          {" "}
          Stay updated with our latest sports events and activities. From
          training camps to tournaments, explore opportunities to showcase your
          skills, connect with fellow athletes, and embrace the spirit of
          competition. Don’t miss out on these exciting events designed for
          sports enthusiasts like you!
        </p>
      </div>
      <div>
        {events.map((event, index) => (
          <EventCard key={index} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
