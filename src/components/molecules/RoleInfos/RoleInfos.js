import React from "react";
import "./roleInfos.css";

const RoleInfos = ({ languages, tools }) => {
  return (
    <div className="roleInfos--container">
      {languages &&
        languages.map((item, index) => {
          return (
            <div key={`${index + 1}--language`}>
              <h2>{item}</h2>
            </div>
          );
        })}
      {tools &&
        tools.map((item, index) => {
          return (
            <div key={`${index + 1}--tool`}>
              <h2>{item}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default RoleInfos;
