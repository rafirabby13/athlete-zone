/* eslint-disable no-unused-vars */
import { ToastContainer } from "react-toastify";
import Banner from "../components/Banner.jsx";
import Feedbacks from "../components/Feedbacks.jsx";
import SportsCategories from "../components/SportsCategories.jsx";
import TrendingNow from "../components/TrendingNow.jsx";
import UpcomingEvents from "../components/UpcomingEvents.jsx";
import Footer from "../Shared/Footer.jsx";
import Navbar from "../Shared/Navbar.jsx";

import "react-toastify/dist/ReactToastify.css";
import Products from "../components/Products.jsx";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div className="space-y-20  pb-20">
      <Helmet>
        <title>Home | AthleteZone</title>
      </Helmet>
      <section>
        <Banner />
      </section>
      <div className="lg:max-w-[85%] space-y-20  mx-auto">
        <section>
          <Products />
        </section>
        <section>
          <SportsCategories />
        </section>
        <section>
          <UpcomingEvents />
        </section>
        <section>
          <TrendingNow />
        </section>
      </div>
    </div>
  );
};

export default Home;
