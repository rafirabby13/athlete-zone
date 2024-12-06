/* eslint-disable no-unused-vars */
import { useContext } from "react";
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
  const { user, logoutUser, theme, setTheme } = useContext(AuthContext);
  const items = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 font-bold text-white" : "font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 font-bold text-white" : "font-bold"
          }
          to="/allSports"
        >
          All Sports Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 font-bold text-white" : "font-bold"
          }
          to="/addEquipment"
        >
          Add Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 font-bold text-white" : "font-bold"
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
    <div className="py-7 nav">
      <div className="navbar  lg:px-28">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {items}
            </ul>
          </div>
          <Fade  direction="up" duration={400} onVisibilityChange={true} damping={0.1}>
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
                className="h-16 w-16 rounded-3xl"
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
              <Link onClick={handleLogout} className="btn">
                Logout
              </Link>
            </div>
          ) : (
            <Link className="btn" to="/login">
              Login
            </Link>
          )}
        </div>
        <div
          data-tooltip-id="toggle"
          onClick={handleTheme}
          className="text-7xl ml-5 font-normal "
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
