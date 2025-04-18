import React, { useState } from "react";
import "./navbar.scss";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore />
              Travel.
            </h1>
          </a>
        </div>

        {/* ✅ Navbar - Mobile Responsive */}
        <nav className={`navBar ${navActive ? "active" : ""}`}>
          <ul className="navLists flex">
            {[
              "Home",
              "Packages",
              "Shop",
              "About",
              "Pages",
              "News",
              "Contacts"
            ].map((item, index) => (
              <li key={index} className="navItems">
                <a href="#" className="navLink">
                  {item}
                </a>
              </li>
            ))}
            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>

          {/* ✅ Close Button for Mobile */}
          <div className="closeNavbar" onClick={() => setNavActive(false)}>
            <IoMdCloseCircle className="icon" />
          </div>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <div className="toggleNavbar" onClick={() => setNavActive(!navActive)}>
          <PiDotsNineBold className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
