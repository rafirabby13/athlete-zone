/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, photo, name, category, description, price, rating, stock } =
    product;
  return (
    <div className="relative group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow h-full flex flex-col justify-between border-2 border-transparent  product">
      <img
        src={photo}
        alt={name}
        className="w-full h-32  hover:scale-105 hover:px-6 transition-transform"
      />
      <div className="p-2">
        <h2 className="text-lg font-bold  ">{name}</h2>
        {/* <p className="text-sm  mt-2">Category: {category}</p> */}
        <p className=" mt-2 text-sm">
          {description.length > 30 ? description.slice(0, 30) : description}...
        </p>
        {/* <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-semibold text-[#439A97]">${price}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"
                }`}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03z" />
              </svg>
            ))}
          </div>
        </div> */}
        {/* <p
          className={`mt-3 text-sm font-semibold ${
            stock === "Available" ? "text-[#439A97]" : "text-[#439A97]"
          }`}
        >
          Available stock : {stock}
        </p> */}
        <Link to={`/allSports/${_id}`}>
          <button className="w-fit px-12 mt-4 py-1 bg-[#439a97cd]  rounded-lg text-sm  transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
