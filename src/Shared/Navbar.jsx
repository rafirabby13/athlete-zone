/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import animationData from "../../public/animation.json";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import Reveal, { Fade } from "react-awesome-reveal";
import "animate.css";
import { IoToggle } from "react-icons/io5";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import Lottie from "lottie-react";
import { keyframes } from "@emotion/react";
const Navbar = () => {
  const [hide, setHide] = useState(true)
  const { user, logoutUser, theme, setTheme } = useContext(AuthContext);
  const items = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 font-bold text-white lg:text-lg" : "font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 font-bold text-white lg:text-lg" : "font-bold"
          }
          to="/allSports"
        >
          All Sports Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 font-bold text-white lg:text-lg" : "font-bold"
          }
          to="/addEquipment"
        >
          Add Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 font-bold text-white lg:text-lg" : "font-bold"
          }
          to={`/myEquipment`}
        >
          My Equipment List
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          title: "Sign OUt",
          text: "Successfully Sign out",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
        });
      });
  };

  const handleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
    console.log(theme);
  };

  

  return (
    <div className="py-1 lg:py-7 nav ">
      <div className="navbar lg:px-4 xl:px-28">
        <div className="navbar-start ">
          <div  className="dropdown ">
            <div onClick={()=> setHide(false)} tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul onClick={()=> setHide(true)}
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-base-100 space-y-3 rounded-box z-50 mt-3 drop w-52 p-4 shadow ${hide ? 'hidden' : ''}`}
            >
              {
                
                items
              }
            </ul>
          </div>
          <Fade className="hidden md:flex"  direction="up" duration={400} onVisibilityChange={true} damping={0.1}>
            <Link to="/" className="text-3xl font-bold">
              AthleteZone
            </Link>
          </Fade>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <img
                data-tooltip-id="my-tooltip"
                className="h-12 lg:h-16 lg:w-16 rounded-3xl"
                src={user?.photoURL}
                alt=""
              />
              <Tooltip
                variant="success"
                style={{
                  background: "purple",
                  color: "white",
                  fontSize: "16px",
                }}
                id="my-tooltip"
                className="z-50 bg-green-600 text-white"
              >
                <div>
                  <h3>{user?.displayName}</h3>
                </div>
              </Tooltip>
              <Link  onClick={handleLogout} className="btn p-2 text-sm">
                Logout
              </Link>
            </div>
          ) : (
            <Link className="btn p-2" to="/login">
              Login
            </Link>
          )}
        </div>
        <div
          data-tooltip-id="toggle"
          onClick={handleTheme}
          className="text-3xl lg:text-7xl pl-3 xl:ml-5 font-normal "
        >
          {theme == "light" ? <FaToggleOff /> : <FaToggleOn />}
        </div>
        <div>
          <Tooltip
            variant="success"
            style={{
              background: "blue",
              color: "white",
              fontSize: "16px",
            }}
            id="toggle"
            className="z-50 bg-green-600 text-white"
          >
            <div>
              <h3>{theme == "light" ? "Light" : "Dark"}</h3>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
