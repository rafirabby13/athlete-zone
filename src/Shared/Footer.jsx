/* eslint-disable no-unused-vars */
import { Fade } from "react-awesome-reveal";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="foote bg-base-200 text-base-content py-5 md:py-10">
        
          <div className="text-center py-6 md:py-20 md:animate__animated animate__slideInDown animate__slower animate__infinite">
          
            <h1 className="font-extrabold text-2xl md:text-7xl drop-shadow-xl">AthleteZone</h1>
           
          </div>
        
        <div className=" flex md:flex-row gap-5 flex-col items-start justify-between px-4 md:px-20">
          <div className="flex flex-col gap-2 text-sm md:text-xl">
            <h6 className="footer-title">Products</h6>
            <a className="link link-hover">Sports Gear</a>
            <a className="link link-hover">Apparel</a>
            <a className="link link-hover">Footwear</a>
            <a className="link link-hover">Accessories</a>
          </div>
          <div className="flex flex-col gap-2 text-sm md:text-xl">
            <h6 className="footer-title">Support</h6>
            <a className="link link-hover">FAQs</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns & Refunds</a>
            <a className="link link-hover">Contact Support</a>
          </div>
          <div className="flex flex-col gap-2 text-sm md:text-xl">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
          </div>
        </div>
      </footer>
      <footer className="foote bg-base-200 text-base-content border-base-300 border-t px-4 md:px-20  text-xl flex md:flex-row flex-col gap-5 items-center justify-between py-10">
        <aside className="grid-flow-col items-center text-sm text-center md:text-start">
          <p>
            @copyright AthleteZone Online Store. All Rights Reserved.
            <br />
            Your trusted partner in sports since 2020
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <div className="text-xl md:text-5xl">
              <FaFacebook />
            </div>
            <div className="text-xl md:text-5xl">
              <FaTwitter />
            </div>
            <div className="text-xl md:text-5xl">
              <FaInstagram />
            </div>
            <div className="text-xl md:text-5xl">
              <FaGithub />
            </div>
            <div className="text-xl md:text-5xl">
              <FaLinkedin />
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
