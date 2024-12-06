/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Shared/Navbar.jsx";
import Footer from "../Shared/Footer.jsx";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Switch } from "@fluentui/react-switch";

const Root = () => {
  const {theme, setTheme} = useContext(AuthContext)

  return (
    <div id={theme}>
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
