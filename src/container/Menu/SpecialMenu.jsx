import React from "react";

import "./SpecialMenu.css";
import { SubHeading } from "../../components";
import { findus } from "../../constants/images";
import { wines, cocktails } from "../../constants/data";
import { MenuItem } from "../../components";

const SpecialMenu = () => {
  return (
    <div className="specialmenu_container section__padding">
      <div className="specialmenu_container_heading">
        <SubHeading text="Menu that fits you palatte" />
        <h1>Today’s Special</h1>
      </div>
      <div className="specialmenu_container_wineimgcocktail">
        <div className="specialmenu_container_winebears">
          <h1>Wine & Beer</h1>
          {wines.map((wine, index) => (
            <MenuItem
              key={index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
        <div className="specialmenu_container_img">
          <img src={findus} alt="wineBottle" />
        </div>
        <div className="specialmenu_container_cocktails">
          <h1>Cocktails</h1>
          {cocktails.map((wine, index) => (
            <MenuItem
              key={index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <button type="button">view more</button>
    </div>
  );
};

export default SpecialMenu;
