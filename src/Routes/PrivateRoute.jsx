/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Navigate, useLocation } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log("loading", loading);
  if (loading) {
    return (
      <div className="flex justify-center min-h-screen">
        {/* <span className="loading loading-dots loading-lg min-h-screen  mx-auto"></span> */}
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
