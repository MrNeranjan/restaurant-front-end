import React from "react";

import "./Footer.css";
import { SubHeading } from "../../components";
import { logo } from "../../constants/images";
import { FaTwitter, FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <div className="footer_container section__padding app__bg">
    <div className="footer_container_heading">
      <SubHeading text="Newsletter" />
      <h1>Subscribe to Our Newsletter</h1>
      <p>And never miss latest Updates!</p>
      <div className="footer_container_email_box">
        <input type="text" placeholder="Enter Email Address" />
        <button type="button">Subscribe</button>
      </div>
    </div>
    <div className="footer_container_footer">
      <div className="footer_container_footer_left">
        <h1>Contact Us</h1>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-555-1230</p>
      </div>
      <div className="footer_container_footer_middle">
        <img src={logo} alt="logoImage" />
        <p>
          The best way to find yourself is to lose yourself in the service of
          others.
        </p>
        <div className="footer_container_footer_middle_icons">
          <FaTwitter className="footer_container_footer_middle_icons_ic" />
          <FaTelegram className="footer_container_footer_middle_icons_ic" />
          <FaInstagram className="footer_container_footer_middle_icons_ic" />
          <FaYoutube className="footer_container_footer_middle_icons_ic" />
        </div>
      </div>
      <div className="footer_container_footer_right">
        <h1>Working Hours</h1>
        <p>Mon - Fri: 10:00 am - 02:00 am</p>
        <p>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
    </div>
    
  </div>
);

export default Footer;
