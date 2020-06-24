import React from "react";
import MainTitle from "../../atoms/MainTitle/MainTitle";
import "./loginContent.css";

const LoginContent = ({ titulo }) => {
  return (
    <main className="loginContent--container">
      <MainTitle texto={titulo} />
    </main>
  );
};

export default LoginContent;
