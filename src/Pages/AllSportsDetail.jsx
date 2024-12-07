import { Helmet } from "react-helmet";
import {  FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AllSportsDetail = () => {
  const equipment = useLoaderData();
  console.log(equipment);
  const {
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
  } = equipment;
  return (
    <div className="min-h-screen w-full py-10 ">
      <Helmet>
           <title>Detail | AthleteZone</title>
      </Helmet>
      <div className="relative bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-sm transform hover:scale-125  mx-auto">
       
        <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {category}
        </div>

        <img src={photo} alt={name} className="w-full h-48 object-cover" />

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 tracking-tight">
            {name}
          </h3>

          <p className="text-gray-600 mt-3 text-sm line-clamp-3">
            {description}
          </p>

          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-bold text-green-600">$ {price}</p>
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                stock > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              Delivery time: {time} days
            </span>
          </div>

          <div className="mt-2 flex justify-between items-center text-sm">
            <div className="flex items-center text-yellow-500">
              <FaStar />
              <span className="ml-2 text-gray-800">{rating} / 5</span>
            </div>
            {customization && (
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                Customizable
              </span>
            )}
          </div>

          <div className="mt-4 text-xs text-gray-500 space-y-2 mb-5">
            <p>
              Added by <span className="font-bold">{displayName}</span>
            </p>
            <p>
              Available until: <span className="font-bold">{stock}</span>
            </p>
            <p>
              Email: <span className="font-bold">{email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSportsDetail;
