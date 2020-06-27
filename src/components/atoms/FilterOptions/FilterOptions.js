import React from "react";
import "./filterOptions.css";

const FilterOptions = ({ filters, onClick }) => {
  return (
    <div className="filterOptions--container">
      {filters.map((item, index) => {
        return (
          <div
            key={`${index + 1}--option`}
            className="filterOptions--filter"
            onClick={onClick}
          >
            <h3 id={item}>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptions;
