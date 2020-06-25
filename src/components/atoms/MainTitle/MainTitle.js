import React from "react";
import "./mainTitle.css";

const MainTitle = ({ texto }) => {
  return (
    <div className="mainTitle--container">
      <h1>{texto}</h1>
    </div>
  );
};

export default MainTitle;
