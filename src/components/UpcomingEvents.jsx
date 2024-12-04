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
             <div>
                {
                    events.map((event, index)=> <EventCard
                    key={index}
                    event={event}
                    ></EventCard>)
                }
             </div>
        </div>
    );
};

export default UpcomingEvents;