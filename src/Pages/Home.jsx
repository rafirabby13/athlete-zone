import { ToastContainer } from "react-toastify";
import Banner from "../components/Banner.jsx";
import Feedbacks from "../components/Feedbacks.jsx";
import SportsCategories from "../components/SportsCategories.jsx";
import TrendingNow from "../components/TrendingNow.jsx";
import UpcomingEvents from "../components/UpcomingEvents.jsx";
import Footer from "../Shared/Footer.jsx";
import Navbar from "../Shared/Navbar.jsx";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  return (
    <div className="space-y-10">
      <section>
        <Navbar />
      </section>
      <section>{/* <Banner /> */}</section>
      <section>{/* <SportsCategories /> */}</section>
      <section>{/* <UpcomingEvents/> */}</section>
      <section>{/* <TrendingNow/> */}</section>
      <section className="min-h-screen"></section>
      <section>
        <Footer />
      </section>
      
    </div>
  );
};

export default Home;
