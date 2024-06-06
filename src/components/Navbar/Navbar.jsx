import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { gericht } from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    return setToggle(!toggle);
  }

  return (
    <div>
      {!toggle ? (
        
        <div className="res_navbar_container-toggle">

          <div className="res_navbar_container-mid-links-toggle">
            <p><a href="#home">Home</a></p>
            <p><a href="#pages">Pages</a></p>
            <p><a href="#contact">Contact Us</a></p>
            <p><a href="#blog">Blog</a></p>
            <p><a href="#landing">Landing</a></p>
          </div>
          <div className="res_navbar_container-right-menu-toggle">
            < MdOutlineRestaurantMenu onClick={handleToggle} />
          </div>

        </div>
      ) : (
        <div className="res_navbar_container">
          <div className="res_navbar_container-logo">
            <img src={gericht} alt="logo" />
          </div>
          <div className="res_navbar_container-mid-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#pages">Pages</a></p>
            <p><a href="#contact">Contact Us</a></p>
            <p><a href="#blog">Blog</a></p>
            <p><a href="#landing">Landing</a></p>
          </div>
          <div className="res_navbar_container-right-sign">
            <button>Login/Registration</button>
            <span>|</span>
            <button>Book Table</button>
          </div>
          <div className="res_navbar_container-right-hamburger">
              <GiHamburgerMenu onClick={handleToggle} />
          </div>
        </div>)

      }
    </div>
  );
}

export default Navbar;
