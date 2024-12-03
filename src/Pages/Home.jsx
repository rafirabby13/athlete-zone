import Banner from "../components/Banner.jsx";
import Footer from "../Shared/Footer.jsx";
import Navbar from "../Shared/Navbar.jsx";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <section className="min-h-screen"></section>
            <Footer/>
        </div>
    );
};

export default Home;