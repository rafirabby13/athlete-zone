/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
const Login = () => {
  const { setUser, loginUser , googleLogin} = useContext(AuthContext);

  const location = useLocation()
  // console.log(location);

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then((res) => {
        // console.log(res.user);
        setUser(res.user);
        form.reset();
        toast.success("Sign In Successfully");
        navigate(location?.state ? location.state : '/')
      })
      .catch((err) => {
        toast.error(err.message);
        // console.log(err.message);
      });
  };

  const handleGoogleLogin=()=>{
    googleLogin()
    .then(res=>{
        // console.log(res.user);
        navigate(location.state ? location.state : '/')

        toast.success("Sign In Successfully");
        setUser(res.user)
    })
    .catch(err=>{
      toast.error(err.message);

    })
  }

  return (
    <div className="her py-20    min-h-screen">
       <Helmet>
           <title>Login | AthleteZone</title>
      </Helmet>
      <div className="hero-conten flex-col ">
        <div className="text-center py-4 md:py-10">
          <h1 className="text-2xl underline md:text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card register bg-base-100 w-full max-w-xl mx-auto md:py-10  shrink-0 shadow-2xl text-black">
          <form className="card-body" onSubmit={handleSubmit}>
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
              Don't have an account?{" "}
              <Link className="underline font-semibold" to="/register">
                Register
              </Link>
            </p>
            <div className="form-control md:mt-6">
              <button className="btn text-white bg-[#439A97]">Login</button>
            </div>
          </form>
          <div className="divider divider-info w-3/4 mx-auto md:pb-5">OR</div>
          <div className="text-center w-full">
            <button className=" btn rounded-lg bg-[#439A97] text-white " onClick={handleGoogleLogin}>Sign In With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
