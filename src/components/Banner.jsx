/* eslint-disable no-unused-vars */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import b5 from "../assets/b5.jpg";
import Slider from "react-slick";
import { Carousel } from "nuka-carousel";

import { SwiperSlide, Swiper } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center gap-10  bg-gradient-to-r from-[#D4F6FF] via-[#FFFECB] to-[#FFF7D1]">
            <div className=" pl-12 w-2/5  space-y-4 ">
              <h1 className="text-4xl font-bold">Fresh Drops for Champions!</h1>
              <p className="text-xl">
                New arrivals to elevate your game. Don’t miss out!
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
            <img className="h-[600px] w-3/5" src={b2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-10 bg-gradient-to-l from-[#D4F6FF] via-[#FFFECB] to-[#FFF7D1]">
            <div className="">
              <img className="h-[600px] " src={b1} alt="" />
            </div>
            <div className=" pr-12 w-2/5  
             space-y-4">
              <h1 className="text-4xl font-bold">Gear Up for Every Sport!</h1>
              <p className="text-xl">
                Discover premium sports accessories for all your needs.
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-10 bg-gradient-to-r from-[#D4F6FF] via-[#FFF] to-[#DCBFFF]">
            <div className="">
              <img className="h-[600px] " src={b1} alt="" />
            </div>
            <div className=" pr-12 w-2/5   space-y-4">
              <h1 className="text-4xl font-bold">
                Top Picks for Every Athlete
              </h1>
              <p className="text-xl">
                Our most loved and highly-rated sports gear just for you!
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-10 bg-gradient-to-r from-[#D4F6FF] via-[#FFF] to-[#BFF6C3]">
            <div className=" pl-12 w-2/5   space-y-4">
              <h1 className="text-4xl font-bold">Train Like a Pro!</h1>
              <p className="text-xl">
                Professional-grade equipment to take your training to the next
                level.
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
            <div className="">
              <img className="h-[600px] " src={b4} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-10 bg-gradient-to-r from-[#D4F6FF] via-[#FFF] to-[#BFF6C3]">
            <div className="">
              <img className="h-[600px] " src={b5} alt="" />
            </div>
            <div className=" pr-12 w-2/5   space-y-4">
              <h1 className="text-4xl font-bold">Season’s Biggest Sale!</h1>
              <p className="text-xl">
                Up to 50% off on select sports gear. Limited Time Only!
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
