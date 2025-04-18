import React, { useEffect, useRef } from "react";
import footerVideo from "../../Assets/footerVideo.mp4";
import "../../App.css";
import { IoIosSend } from "react-icons/io";
import "./footer.scss";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandTripadvisor } from "react-icons/tb";
import { IoChevronForwardOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video
          ref={videoRef}
          src={footerVideo}
          muted
          autoPlay
          loop
          playsInline
          type="video/mp4"
        ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv">
          <div className="text" data-aos="fade-up">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
        </div>
      </div>

      <div className="inputDiv flex" data-aos="fade-up">
        <input type="text" placeholder="Your Email Address" />
        <button className="btn flex button" type="submit">
          Send
          <IoIosSend className="icon" />
        </button>
      </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv" data-aos="fade-up">
            <a href="#" className="logo flex">
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </a>
          </div>
          <p className="footerParagraph" data-aos="fade-up">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div className="footerSocials flex" data-aos="fade-up">
            <FaTwitter className="icon" />
            <IoLogoYoutube className="icon" />
            <AiFillInstagram className="icon" />
            <TbBrandTripadvisor className="icon" />
          </div>
        </div>

        <div
          className="footerLinks grid"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="linkGroup">
            <span className="groupTitle">OUR AGENCY</span>
            <ul>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                Support
              </li>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                Agency
              </li>
            </ul>
          </div>

          <div className="linkGroup">
            <span className="groupTitle">PARTNERS</span>
            <ul>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                Trivago
              </li>
            </ul>
          </div>

          <div className="linkGroup">
            <span className="groupTitle">LAST MINUTE</span>
            <ul>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                London
              </li>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                California
              </li>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <IoChevronForwardOutline className="icon" />
                Oceania
              </li>
            </ul>
          </div>
        </div>
        <div className="footerDiv">
          © {new Date().getFullYear()} TravelWithUs. All rights reserved.
          Explore the world, discover new horizons, and create memories that
          last a lifetime. Stay connected with us for exclusive travel deals,
          tips, and inspiration.
        </div>
      </div>
    </section>
  );
};

export default Footer;
