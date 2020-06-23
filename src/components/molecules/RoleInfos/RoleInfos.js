import React from "react";
import "./roleInfos.css";

const RoleInfos = ({ languages, tools }) => {
  return (
    <div className="roleInfos--container">
      {languages &&
        languages.map(item => {
          return (
            <div>
              <h2>{item}</h2>
            </div>
          );
        })}
      {tools &&
        tools.map(item => {
          return (
            <div>
              <h2>{item}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default RoleInfos;
