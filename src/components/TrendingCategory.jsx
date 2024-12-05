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
    <div className="flex justify-between text-2xl gap-4 p-6 ">
      {trendingCategory.map((trending, i) => (
        <div key={i} className="p-4 w-full border-2 text-center bg-purple-400" onClick={()=> handleSearch(trending.category)}>
          <p ><NavLink className=''>{trending.category}</NavLink></p>
        </div>
      ))}
    </div>
  );
};

export default TrendingCategory;
