/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { track } from "framer-motion/m";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const TrendingCategory = ({handleSearch}) => {
  const [trendingCategory, setTrendingCategory] = useState([]);

  useEffect(() => {
    fetch("../trandingCategory.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTrendingCategory(data);
      });
  }, []);
 
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between text-sm md:text-2xl gap-4 pb-4 md:pb-0 md:p-3 ">
      {trendingCategory.map((trending, i) => (
        <div key={i} className="p-2 md:p-4 w-fit md:w-full  text-center bg-[#439A97] font-semibold trend animate__animated animate__bounce animate__slower animate__repeat-3 animate__delay-3s" onClick={()=> handleSearch(trending.category)}>
          <p ><NavLink className=''>{trending.category}</NavLink></p>
        </div>
      ))}
    </div>
  );
};

export default TrendingCategory;
