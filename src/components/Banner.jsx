/* eslint-disable no-unused-vars */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import b5 from "../assets/b5.jpg";
import football from "../../public/football.json";
import champion from "../../public/champ.json";
import sale from "../../public/sale.json";
import { SwiperSlide, Swiper } from "swiper/react";
import choise from "../../public/choise.json";
import gear from "../../public/Animation - 1733507131405.json";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="z-10">
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
          <div className="flex py-2 md:py-0 md:flex-row flex-col-reverse items-center md:gap-10   bg-gradient-to-r from-[#D4F6FF] via-[#FFFECB] to-[#FFF7D1] banner ">
            <div className=" md:pl-12 md:w-2/5  space-y-4 ">
              <h1 className="text-2xl md:text-4xl font-bold">
                Fresh Drops for Champions!
              </h1>
              <p className="text-lg md:text-xl">
                New arrivals to elevate your game. Don’t miss out!
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
            <div className="md:w-3/5">
              <Lottie
                className="h-[300px] md:h-[600px]"
                animationData={champion}
                loop={true}
              />
            </div>
          </div>
        </SwiperSlide> 
         <SwiperSlide>
          <div className="flex py-2 md:py-0 md:flex-row flex-col items-center md:gap-10   bg-gradient-to-l from-[#D4F6FF] via-[#FFFECB] to-[#FFF7D1] banner">
            <div className="md:w-3/5">
              <Lottie
                className="h-[300px] md:h-[600px]"
                animationData={gear}
                loop={true}
              />
            </div>
            <div
              className=" md:pr-12 md:w-2/5  
             space-y-4"
            >
              <h1 className="text-2xl md:text-4xl font-bold">Gear Up for Every Sport!</h1>
              <p className="text-lg md:text-xl">
                Discover premium sports accessories for all your needs.
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide> 
         <SwiperSlide>
          <div className="flex py-2 md:py-0 md:flex-row flex-col items-center md:gap-10   bg-gradient-to-r from-[#D4F6FF] via-[#FFF] to-[#DCBFFF] banner">
            <div className="md:w-3/5">
              <Lottie
                className="h-[300px] md:h-[600px]"
                animationData={choise}
                loop={true}
              />
            </div>
            <div className=" md:pr-12 md:w-2/5   space-y-4">
              <h1 className="text-2xl lg:text-4xl font-bold">
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
          <div className="flex py-2 md:py-0 md:flex-row flex-col-reverse items-center md:gap-10    bg-gradient-to-r from-[#D4F6FF] via-[#FFF] to-[#BFF6C3] banner">
            <div className=" md:pl-12 md:w-2/5   space-y-4">
              <h1 className="text-2xl lg:text-4xl font-bold">Train Like a Pro!</h1>
              <p className="text-xl">
                Professional-grade equipment to take your training to the next
                level.
              </p>
              <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-shadow shadow-lg hover:shadow-xl">
                Explore
              </button>
            </div>
            <div className="md:w-3/5">
              <Lottie
                className="h-[300px] md:h-[600px]"
                animationData={football}
                loop={true}
              />
            </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex py-2 md:py-0 md:flex-row flex-col  md:gap-10  items-center  bg-gradient-to-r from-[#D4F6FF] via-[#FFF] to-[#BFF6C3] banner">
            <div className="md:w-3/5">
              <Lottie
                className="h-[300px] md:h-[600px]"
                animationData={sale}
                loop={true}
              />
            </div>
            <div className=" md:pr-12 md:w-2/5   space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold">Season’s Biggest Sale!</h1>
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
