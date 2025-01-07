/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const { registerUser, setUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);

  const location = useLocation();
  // console.log(location);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // console.log(name, email, password, photo);
    const capital = /(?=.*[A-Z])/;
    const small = /(?=.*[a-z])/;
    if (password.length > 5) {
      if (capital.test(password)) {
        if (small.test(password)) {
          registerUser(email, password)
            .then((res) => {
              // console.log(res.user);
              setUser(res.user);
              updateUserProfile(name, photo)
                .then(() => {
                  toast.success("Registered Successfully");
                  form.reset();
                  navigate(location?.state ? location.state : "/");
                })
                .catch((err) => {
                  toast.error(err.message);
                });
            })
            .catch((err) => {
              toast.error(err.message);
            });
        } else {
          Swal.fire({
            title: "Sign Up Failed!",
            text: "Password must contain a small letter",
            icon: "error",
          });
        }
      } else {
        Swal.fire({
          title: "Sign Up Failed!",
          text: "Password must contain a CAPITAL letter",
          icon: "error",
        });
      }
    } else {
      Swal.fire({
        title: "Sign Up Failed!",
        text: "Password must be at least 6 character",
        icon: "error",
      });
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        // console.log(res.user);
        toast.success("Registered Successfully");
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="her my-28 lg:mt-36   min-h-screen">
      <Helmet>
        <title>Register | AthleteZone</title>
      </Helmet>
      <div className="hero-conten flex-col  ">
        <div className="text-center  md:py-10">
          <h1 className="text-2xl md:text-5xl font-bold ">
            Register now!
          </h1>
        </div>
        <div className="card register w-full max-w-xl mx-auto md:py-0 pb-7 md:pb-0  shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name ..."
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Your Photo URL"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <p className="md:text-2xl">
              Already have an account?{" "}
              <Link className="underline font-semibold" to="/login">
                Login
              </Link>
            </p>
            <div className="form-control md:mt-6">
              <button className="btn  bg-[#439A97] text-white">Register</button>
            </div>
          </form>
          <div className="divider divider-info w-3/4 mx-auto md:pb-5">OR</div>
          <div className="text-center w-full mb-10">
            <button
              className=" btn rounded-lg   bg-[#439A97]  text-white"
              onClick={handleGoogleLogin}
            >
              Sign Up With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
