/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { FaEdit, FaEnvelope, FaShoppingCart, FaStar } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider.jsx";
// import 'sweetalert2/src/sweetalert2.scss'

const MyEquipmentListCard = ({ myEquipments , handleDelete}) => {


  const {
    _id,
    photo,
    name,
    category,
    description,
    price,
    rating,
    customization,
    time,
    stock,
    email,
    displayName,
  } = myEquipments;



  return (
    <div>
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:ring-2 hover:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-2 max-w-sm">
        {/* Decorative Badge */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
          {category}
        </div>

        {/* Product Image */}
        <div className="relative">
          <img
            src={photo}
            alt={name}
            className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-5">
          {/* Product Name */}
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-2 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Price, Stock, and Customization */}
          <div className="mt-4 flex justify-between items-center">
            <p className="text-2xl font-bold text-indigo-600">${price}</p>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-1 text-yellow-400">
              <FaStar />
              <span className="text-gray-700 font-medium">{rating}/5</span>
            </div>
          </div>

          <div className="mt-5 flex justify-between items-center space-x-3">
            <Link className="w-full bg-indigo-600 text-white text-sm py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition-transform duration-200 transform hover:scale-105 flex items-center justify-center">
              <FaEdit className="inline-block mr-2" /> Edit
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="w-full bg-indigo-600 text-white text-sm py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition-transform duration-200 transform hover:scale-105 flex items-center justify-center"
            >
              <RiDeleteBin6Fill className="inline-block mr-2" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEquipmentListCard;
