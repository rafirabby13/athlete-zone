/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TresndingCards from "./TresndingCards.jsx";
import TrendingCategory from "./TrendingCategory.jsx";

const TrendingNow = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [trendingCategories, setTrendingCategories] = useState([]);

  useEffect(() => {
    fetch("./trendingData.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllCategories(data)
        setTrendingCategories(data);
      });
  }, []);

  const handleSearch = (ct) => {
    console.log(ct);
    
    const remaining = allCategories.filter((cate) => cate.category == ct);
    console.log(remaining);
    setTrendingCategories(remaining);
  };

  return (
    <div>
      <div className="w-3/4 mx-auto space-y-8 py-10 text-center">
        <h1 className="text-4xl font-bold p-4 shadow-purple-600 shadow-md">
          Trending Now
        </h1>
        <p className="text-xl">
          Discover the latest and most popular products trending in the sports
          world! From high-performance gear to must-have accessories, explore
          the best that’s currently making waves in the sports industry. Stay
          ahead of the game with our top picks, and gear up with the essentials
          everyone is talking about!
        </p>
      </div>
      <TrendingCategory handleSearch={handleSearch}></TrendingCategory>

      <div className="grid grid-cols-3 gap-4">
        {trendingCategories.map((category,i) => (
          <TresndingCards
            key={i}
            categoryy={category}
          ></TresndingCards>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
