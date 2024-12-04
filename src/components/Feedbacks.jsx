/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Slider from "@ant-design/react-slick";
import FeedbackCard from "./FeedbackCard.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Feedbacks = () => {
  const [feedbacks, setfeedBacks] = useState([]);

  useEffect(() => {
    fetch("./feedbacks.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setfeedBacks(data);
      });
  }, []);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    
  };
  return (
    <div>
      <div>
      <h1>Upcoming Sports Events</h1>
<p>
  Stay updated with the latest sports events happening around the world! Whether you're 
  a participant or a spectator, our store provides all the essential gear you need to 
  be part of these exciting events. From tournaments to charity runs, don't miss out on 
  these upcoming opportunities to compete, have fun, and support your favorite sports.
</p>


        <div className="slider-container">
          <Slider {...settings}>
            {feedbacks.map((feedback) => (
              <FeedbackCard
                key={feedback.id}
                feedback={ feedback}
              ></FeedbackCard>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
