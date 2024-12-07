/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errr from '../../public/404.json'
import { Helmet } from "react-helmet";
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <Helmet>
           <title>Error | AthleteZone</title>
      </Helmet>
      <div className="text-center">
        <p className="w-full">
        <Lottie className="h-48" animationData={errr} loop={true} />
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          The page you are looking for might have been moved, deleted, or
          doesn't exist.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
