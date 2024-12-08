/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { FaEdit, FaEnvelope, FaShoppingCart, FaStar } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Helmet } from "react-helmet";
// import 'sweetalert2/src/sweetalert2.scss'

const MyEquipmentListCard = ({ myEquipments, handleDelete }) => {
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

  const handleEdit = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Helmet>
           <title>My Equipment | AthleteZone</title>
      </Helmet>
      <div className="relative bg-white myEquipment shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:ring-2 hover:ring-[#439A97] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between h-full">
        <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
          {category}
        </div>

        
        <div className="relative">
          <img
            src={photo}
            alt={name}
            className="w-full h-28 md:h-56 xl:h-80  transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-1 md:p-5">
       
          <h3 className="text-lg font-semibold  truncate">{name}</h3>

          
          <p className="text-sm  mt-2 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Price, Stock, and Customization */}
          <div className="mt-4 flex justify-between items-center">
            <p className="text-2xl font-bold text-[#439A97]">${price}</p>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-1 text-orange-700 text-lg">
              <FaStar />
              <span className="font-medium">{rating}/5</span>
            </div>
          </div>

          <div className="mt-5 flex justify-between items-center space-x-1 md:space-x-3">
            <Link
              to={`/updateEquipment/${_id}`}
              className="w-full bg-[#439A97] text-white md:text-sm py-1 md:py-2 px-1 md:px-4 rounded-md shadow-md hover:bg-[#028d88] text-xs transition-transform duration-200 transform hover:scale-105 flex items-center justify-center"
            >
              <FaEdit className="inline-block mr-2" /> Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="w-full bg-[#439A97] text-white md:text-sm py-1 md:py-2 px-1 md:px-4 rounded-md shadow-md hover:bg-[#028d88] text-xs transition-transform duration-200 transform hover:scale-105 flex items-center justify-center"
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
