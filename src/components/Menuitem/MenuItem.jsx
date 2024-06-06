import React from "react";

import "./MenuItem.css";

function MenuItem({ title, price, tags }) {
  return (
    <div className="MenuItem_container">
      <div className="MenuItem_container_firstline">
        <h2>{title}</h2>
        <h3>-</h3>
        <p>{price}</p>
      </div>
      <div className="MenuItem_container_tags">
        <p>{tags}</p>
      </div>
    </div>
  );
}

export default MenuItem;
