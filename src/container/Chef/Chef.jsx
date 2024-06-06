import React from "react";

import "./Chef.css";

import { chef, sign } from "../../constants/images";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="Chef_container section__padding app__bg">
    <div className="Chef_container_img">
      <img src={chef} alt="chef" />
    </div>
    <div className="Chef_container_info">
      <div className="Chef_container_info_header">
        <SubHeading text="Chef’s Word" />
        <h1>What we believe in</h1>
      </div>
      <div className="Chef_container_info_para">
        <p>
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>
      <div className="Chef_container_info_sign">
        <h1>Kevin Luo</h1>
        <p>Chef & Founder</p>
      </div>
      <div className="Chef_container_info_sign_img">
        <img src={sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
