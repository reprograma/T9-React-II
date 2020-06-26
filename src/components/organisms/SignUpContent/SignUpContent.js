import React from "react";
import MainTitle from "../../atoms/MainTitle/MainTitle";
import FormSignUp from "../../molecules/FormSignUp/FormSignUp";
import "./signUpContent.css";

const SignUpContent = ({ texto, onFinish, login }) => {
  return (
    <main className="signUpContent--container">
      <MainTitle texto={texto} />
      <FormSignUp onFinish={onFinish} login={login} />
    </main>
  );
};

export default SignUpContent;
