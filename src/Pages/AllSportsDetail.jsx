import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const AllSportsDetail = () => {
  const equipment = useLoaderData();
  // console.log(equipment);
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
    <div className="min-h-screen w-full py-10 mt-40">
      <Helmet>
        <title>Detail | AthleteZone</title>
      </Helmet>
      <div className="relative max-w-[85%]  shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow  mx-auto allSports flex  ">
        {/* <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white  font-bold px-3 py-3 rounded-xl text-lg shadow-md">
          {category}
        </div> */}

        <div className="w-1/2">
          <img
            src={photo}
            alt={name}
            className="w-full h-48 md:h-[400px] "
          />
        </div>

        
    <div className="p-10 border-l-4 border-purple-600 bg-white ">
      {/* Product Name */}
      <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
        {name}
      </h3>

      {/* Category */}
      {category && (
        <p className="text-sm text-gray-500 italic mt-1">{category}</p>
      )}

      {/* Description */}
      <p className="text-gray-600 mt-3 line-clamp-3">{description}</p>

      {/* Price and Delivery Time */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xl font-bold text-green-600">${price}</p>
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
          Delivery time: {time} days
        </span>
      </div>

      {/* Rating and Customization */}
      <div className="mt-2 flex justify-between items-center text-lg">
        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.176 3.618a1 1 0 00.95.691h3.823a1 1 0 01.591 1.809l-3.097 2.253a1 1 0 00-.364 1.118l1.176 3.618a1 1 0 01-1.539 1.118L10 13.347l-3.097 2.253a1 1 0 01-1.539-1.118l1.176-3.618a1 1 0 00-.364-1.118L3.079 9.045a1 1 0 01.591-1.809h3.823a1 1 0 00.95-.691L9.049 2.927z" />
          </svg>
          <span className="ml-2 text-gray-800">{rating} / 5</span>
        </div>
        {/* Customizable Badge */}
        {customization && (
          <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            Customizable
          </span>
        )}
      </div>

      {/* Additional Information */}
      <div className="mt-4 text-gray-500 space-y-2 text-sm">
        <p>
          Added by: <span className="font-bold">{displayName}</span>
        </p>
        <p>
          Available until: <span className="font-bold">{stock}</span>
        </p>
        <p>
          Email: <span className="font-bold text-green-700">{email}</span>
        </p>
      </div>
    </div>
      </div>
    </div>
  );
};

export default AllSportsDetail;
