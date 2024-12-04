import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TresndingCards from "./TresndingCards.jsx";

const TrendingNow = () => {

    const [trendingCategories, setTrendingCategories] = useState([])


    useEffect(()=>{
        fetch('./trendingData.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setTrendingCategories(data)
        })
    },[])


  return (
    <div>
      <h1 className="text-center text-5xl ">Trending Now</h1>
      <nav className="flex items-center justify-center gap-5 text-2xl font-semibold">
        <p>
          <NavLink>Soccer Accessories</NavLink>
        </p>
        <p>
          <NavLink>Running Essentials</NavLink>
        </p>
        <p>
          <NavLink>Fitness & Yoga</NavLink>
        </p>
        <p>
          <NavLink>Cycling Gear</NavLink>
        </p>
        <p>
          <NavLink>Tennis Equipment</NavLink>
        </p>
      </nav>

      <div className="grid grid-cols-3 gap-4">
        {
            trendingCategories.map(category=><TresndingCards
            key={category.id}
            categoryy={category}
            ></TresndingCards>)
        }
      </div>
    </div>
  );
};

export default TrendingNow;
