/* eslint-disable no-unused-vars */
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import BannerSlider from "./BannerSlider.jsx";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch("./banner.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBanner(data);
      });
  }, []);
  return (
    <div className="z-10 mt:10 lg:mt-24">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banner?.map((banner, i) => (
          <SwiperSlide key={i}>
            <BannerSlider banner={banner}></BannerSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
