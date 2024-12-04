/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
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
