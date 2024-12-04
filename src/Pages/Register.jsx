/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

const {registerUser, setUser, updateUserProfile} = useContext(AuthContext)



    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo);
        registerUser(email, password)
        .then(res=>{
            // console.log(res.user);
            setUser(res.user)
            updateUserProfile(name, photo)
            .then(()=>{
                toast.success('Registered Successfully')
                form.reset()
            })
            .catch(err=>{
                console.log(err.message);
            })
        })
        .catch(err=>{
            console.log(err.message);
        })

    }




  return (
    <div className="her bg-base-200 min-h-screen">
      <div className="hero-conten flex-col ">
        <div className="text-center py-10">
          <h1 className="text-5xl font-bold">Register now!</h1>
        
        </div>
        <div className="card bg-base-100 w-full max-w-xl mx-auto py-10  shrink-0 shadow-2xl">
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
            <p className="text-2xl">Already have an account? <Link className="underline font-semibold" to='/login'>Login</Link></p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
