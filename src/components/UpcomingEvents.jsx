/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import EventCard from "./EventCard.jsx";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Fade } from "react-awesome-reveal";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const { dataLoading, setDataLoading } = useContext(AuthContext);
  useEffect(() => {
    setDataLoading(true);
    fetch("./events.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setEvents(data);
        setDataLoading(false);
      });
  }, [setDataLoading]);
  return (
    <div>
      {dataLoading ? (
        <div className="flex justify-center"><span className="loading loading-bars loading-lg mx-auto"></span></div>
      ) : (
        <div>
          <div className="md:w-3/4 mx-auto space-y-8 py-10 text-center">
            <h1 className="text-2xl md:text-4xl font-bold p-4 shadow-purple-600 shadow-md">
              Upcoming Events
            </h1>
            <p className="text-lg md:text-xl">
              
              Stay updated with our latest sports events and activities. From
              training camps to tournaments, explore opportunities to showcase
              your skills, connect with fellow athletes, and embrace the spirit
              of competition. Don’t miss out on these exciting events designed
              for sports enthusiasts like you!
            </p>
          </div>
          <div>
            {events.map((event, index) => (
               <Fade
               cascade
               delay={index * 200}
               direction="up"
               triggerOnce={true}
               damping={0.4}
               key={index}
             >
              <EventCard key={index} event={event}></EventCard>
              </Fade>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
