import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Shared/Navbar.jsx";
import Footer from "../Shared/Footer.jsx";

const Root = () => {
  return (
    <div >
      <section>
        <Navbar />
      </section>
      <Outlet />
      <section>
        <Footer />
      </section>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </div>
  );
};

export default Root;
