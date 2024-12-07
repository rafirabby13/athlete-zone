/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import SportsCategoryCard from "./SportsCategoryCard.jsx";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Fade } from "react-awesome-reveal";


const SportsCategories = () => {
  const [categories, setCategories] = useState([]);
  const { dataLoading, setDataLoading } = useContext(AuthContext);
  useEffect(() => {
    setDataLoading(true);
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data);
        setDataLoading(false);
      });
  }, [setDataLoading]);

  return (
    <div>
      {dataLoading ? (
        <div className="flex justify-center"><span className="loading loading-bars loading-lg mx-auto"></span></div>
      ) : (
        <div>
          <div className="md:w-3/4 mx-auto space-y-8 py-10 text-center">
            <h1 className="text-2xl md:text-4xl font-bold p-4 shadow-purple-600 shadow-md">
              Sports Categories
            </h1>
            <p className="text-lg md:text-xl">
              Discover a wide variety of sports categories designed to match
              your passion and skill. Whether you're a beginner or a pro, find
              the perfect gear and equipment to elevate your game and embrace
              every challenge with confidence.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6
            "
          >
            {categories.map((category, i) => (
              <Fade
              cascade
              delay={i * 200}
              direction="right"
              triggerOnce={true}
              damping={0.4}
              key={i}
            >
              <SportsCategoryCard
                key={i}
                category={category}
              ></SportsCategoryCard>
              </Fade>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SportsCategories;
