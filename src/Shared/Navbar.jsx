import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";
import 'animate.css';
const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const items = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allSports">All Sports Equipment</NavLink>
      </li>
      <li>
        <NavLink to="/addEquipment">Add Equipment</NavLink>
      </li>
      <li>
        <NavLink to={`/myEquipment`}>My Equipment List</NavLink>
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

  return (
    <div className="py-7">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
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
          <Fade  delay={1e3} cascade damping={1e-1}>
          <Link to="/" className="animate__animated animate__zoomOutUp animate__slower animate__infinite text-2xl font-bold">
            AthleteZone{" "}
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
              <Tooltip variant="success" style={{background: 'purple', color: 'white' , fontSize: '16px'}} id="my-tooltip" className="z-50 bg-green-600 text-white">
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
      </div>
    </div>
  );
};

export default Navbar;
