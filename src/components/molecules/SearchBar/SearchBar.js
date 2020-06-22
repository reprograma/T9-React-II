import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import "./searchBar.css";

const SearchBar = ({ texto, onClick, type, placeholder, value, onChange }) => {
  return (
    <div className="searchBar--container">
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Button texto={texto} onClick={onClick} />
    </div>
  );
};

export default SearchBar;
