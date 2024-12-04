import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import Swal from "sweetalert2";

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


  const handleLogout=()=>{
    logoutUser()
    .then(()=>{
      Swal.fire({
        title: "Sign OUt",
        text: "Successfully Sign out",
        icon: "success"
      });
    })
    .catch(err=>{
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error"
      });
    })

  }

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
          <Link to="/" className=" text-xl">
            AthleteZone{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <img className="h-16 w-16 rounded-3xl" src={user?.photoURL} alt="" />
              <Link onClick={handleLogout} className="btn">Logout</Link>
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
