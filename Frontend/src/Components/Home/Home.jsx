import React, { useState, useEffect } from "react";
import "./home.scss";
import video from "../../Assets/video.mp4";
import "../../App.css";
import { MdWrongLocation } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [price, setPrice] = useState(5000);

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    const slider = e.target;
    const percent = ((newPrice - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #10baee 0%, #10baee ${percent}%, #ddd ${percent}%, #ddd 100%)`;
  };

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        {/* Text Section */}
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" data-aos-duration="3000" className="homeTitle">
            Search Your Holidays
          </h1>
        </div>

        {/* Card Section */}
        <div data-aos="fade-up" className="cardDiv grid">
          {/* Destination Input */}
          <div className="destinationInput" data-aos="fade-up">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input type="text" placeholder="Enter the name here..." />
              <MdWrongLocation className="icon" />
            </div>
          </div>

          {/* Date Input */}
          <div className="dateInput" data-aos="fade-up">
            <label htmlFor="date">Select your date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          {/* Price Range Input */}
          <div className="priceInput" data-aos="fade-up">
            <div className="price-range-wrapper">
              <label htmlFor="price">Select Your Budget: ৳{price}</label>
              <div className="total">
                <input
                  type="range"
                  id="priceRange"
                  className="range-slider"
                  min="0"
                  max="10000"
                  step="100"
                  value={price}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Icons Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="7000"
          className="homeFooterIcons flex"
        >
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
          </div>
          <div className="leftIcons">
            <FaTripadvisor className="icon" />
            <FaListUl className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
