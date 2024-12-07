/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, photo, name, category, description, price, rating, stock } =
    product;
  return (
   
    <div className="relative group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow h-full flex flex-col justify-between border-2 border-transparent hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-500 product">
    <img
      src={photo}
      alt={name}
      className="w-full h-60  group-hover:scale-105 transition-transform"
    />
    <div className="p-6">
      <h2 className="text-lg font-bold  group-hover:text-blue-500 transition-transform transform group-hover:scale-105">
        {name}
      </h2>
      <p className="text-sm  mt-2">Category: {category}</p>
      <p className=" mt-2 text-sm">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xl font-semibold text-blue-600">${price}</span>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < Math.round(rating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03z" />
            </svg>
          ))}
        </div>
      </div>
      <p
        className={`mt-3 text-sm font-semibold ${
          stock === "Available"
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        Available stock : {stock}
      </p>
      <button className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-purple-500 hover:to-blue-500 transition">
        <Link to={`/allSports/${_id}`}>View Details</Link>
      </button>
    </div>
    <div className="absolute top-4 right-4 bg-purple-800 font-semibold shadow-lg  p-3 text-lg rounded-2xl  transition-transform transform group-hover:scale-105 group-hover:bg-blue-500 text-white">
      {category}
    </div>
  </div>
  
  );
};

export default Product;
