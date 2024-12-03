import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import b5 from "../assets/b5.jpg";
import Slider from "react-slick";
const Banner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    auseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="relative">
          <div className="absolute top-1/2 bg-[#ffffffbb] ">
            <h1>Gear Up for Every Sport!</h1>
            <p>Discover premium sports accessories for all your needs.</p>
            <button>Shop Now</button>
          </div>

          <div>
            <img className="h-[600px] w-full" src={b1} alt="" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 bg-[#ffffffbb] ">
            <h1>Fresh Drops for Champions!</h1>
            <p>New arrivals to elevate your game. Don’t miss out!</p>
            <button>Check New Arrivals</button>
          </div>
          <img className="h-[600px] w-full" src={b2} alt="" />
        </div>
        <div className="relative">
          <div className="absolute top-1/2 bg-[#ffffffbb] ">
            <h1>Top Picks for Every Athlete</h1>
            <p>Our most loved and highly-rated sports gear just for you!</p>
            <button>Browse Top Picks</button>
          </div>
          <img className="h-[600px] w-full" src={b3} alt="" />
        </div>
        <div className="relative">
          <div className="absolute top-1/2 bg-[#ffffffbb] ">
            <h1>Train Like a Pro!</h1>
            <p>
              Professional-grade equipment to take your training to the next
              level.
            </p>
            <button>Shop Pro Gear</button>
          </div>
          <img className="h-[600px] w-full" src={b4} alt="" />
        </div>
        <div className="relative">
          <div className="absolute top-1/2 bg-[#ffffffbb] ">
            <h1>Season’s Biggest Sale!</h1>
            <p>Up to 50% off on select sports gear. Limited Time Only!</p>
            <button>Explore Deals</button>
          </div>
          <img className="h-[600px] w-full" src={b5} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
