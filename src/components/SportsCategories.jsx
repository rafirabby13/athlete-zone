/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import SportsCategoryCard from "./SportsCategoryCard.jsx";
import Lottie from "lottie-react";

const SportsCategories = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('./categories.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setCategories(data)
        })
    },[]);
   
    return (
        <div>
        
            <div className="w-3/4 mx-auto space-y-8 py-10 text-center">
          <h1 className="text-4xl font-bold p-4 shadow-purple-600 shadow-md">Sports Categories</h1>
          <p className="text-xl">Discover a wide variety of sports categories designed to match your passion and skill. Whether you're a beginner or a pro, find the perfect gear and equipment to elevate your game and embrace every challenge with confidence.</p>
          </div>
            <div className="grid grid-cols-3 gap-6
            ">
                {
                    categories.map((category, i)=> <SportsCategoryCard 
                    key={i}
                    category={category}
                    ></SportsCategoryCard>)
                }
            </div>
           
        </div>
    );
};

export default SportsCategories;