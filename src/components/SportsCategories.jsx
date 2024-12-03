import { useEffect, useState } from "react";
import SportsCategoryCard from "./SportsCategoryCard.jsx";

const SportsCategories = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('./categories.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setCategories(data)
        })
    },[])
    return (
        <div>
            <h1>Sports Categories</h1>
            <div className="flex gap-3">
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