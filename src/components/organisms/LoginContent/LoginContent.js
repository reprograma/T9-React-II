import React from "react";
import MainTitle from "../../atoms/MainTitle/MainTitle";
import FormLogin from "../../molecules/FormLogin/FormLogin";
import "./loginContent.css";

const LoginContent = ({ titulo, onFinish, login }) => {
  return (
    <main className="loginContent--container">
      <MainTitle texto={titulo} />
      <FormLogin onFinish={onFinish} login={login} />
    </main>
  );
};

export default LoginContent;
