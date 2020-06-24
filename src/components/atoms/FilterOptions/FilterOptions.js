import React from "react";
import "./filterOptions.css";

const FilterOptions = ({ filters, onClick }) => {
  return (
    <div className="filterOptions--container">
      {filters.map(item => {
        return (
          <div className="filterOptions--filter" onClick={onClick}>
            <h3>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptions;
