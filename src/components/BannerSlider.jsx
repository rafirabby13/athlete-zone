/* eslint-disable react/prop-types */

import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
const BannerSlider = ({ banner }) => {
  const { title, description, animation } = banner;
// bg-[#439A97]
  return (
    <div className="bg-[#a5cfc4ab] pt-20 md:py-0">
      <div className="lg:max-w-[85%] mx-auto flex py-2 md:py-5 md:flex-row flex-col-reverse items-center md:gap-10 justify-between   banner ">
        <div className=" p-2   space-y-4 ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#82659c]">{title}</h1>
          <p className="text-lg md:text-2xl lg:text-3xl font-medium">{description}</p>
          <button className="px-16 py-3   rounded-lg bg-[#5ce3bf] bg-[#ffffff51] transition-shadow shadow-lg text-[#82659c] shadow-[#82659c] hover:shadow-xl md:text-2xl lg:text-3xl">
            Explore
          </button>
        </div>
        <div className=" h-[300px] md:h-[400px]">
          <DotLottiePlayer src={animation} autoplay loop></DotLottiePlayer>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
