/* eslint-disable no-unused-vars */
import { } from "framer-motion";

/* eslint-disable react/prop-types */
const SportsCategoryCard = ({ category }) => {
  const { name, image, description, cta } = category;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 h-full flex flex-col justify-between ">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2 text-xl">{description}</p>
        
      </div>
    </div>
  );
};

export default SportsCategoryCard;
