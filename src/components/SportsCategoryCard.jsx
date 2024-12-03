import { } from "framer-motion";

/* eslint-disable react/prop-types */
const SportsCategoryCard = ({ category }) => {
  const { name, image, description, cta } = category;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 h-full flex flex-col justify-between ">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
           {cta}
        </button>
      </div>
    </div>
  );
};

export default SportsCategoryCard;
