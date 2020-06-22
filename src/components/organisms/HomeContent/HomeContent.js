import React from "react";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import "./homeContent.css";

const HomeContent = ({
  texto,
  onClick,
  type,
  placeholder,
  value,
  onChange
}) => {
  return (
    <main>
      <h1>TechJobs</h1>
      <section>
        <SearchBar texto={texto} onClick={onClick} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        <div>
          <h2>FILTROS</h2>
        </div>
      </section>
      <section>
        <h2>CARDS</h2>
      </section>
    </main>
  );
};

export default HomeContent;
