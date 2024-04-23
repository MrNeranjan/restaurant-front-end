import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import {gericht} from "../../constants/images";
import "./Navbar.css";

const Navbar = () => (
  <div className="res_navbar_container">
    <div className="res_navbar_container-logo">
      <img src={gericht} alt="logo"/>
    </div>
    <div className="res_navbar_container-mid-links">
      <p><a href="#home">Home</a></p>
      <p><a href="#home">Pages</a></p>
      <p><a href="#home">Contact Us</a></p>
      <p><a href="#home">Blog</a></p>
      <p><a href="#home">Landing</a></p>
    </div>
    <div className="res_navbar_container-right-sign">
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  </div>
);

export default Navbar;
