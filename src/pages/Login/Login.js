import React, { Component } from "react";
import GeneralTemplate from "../../templates/GeneralTemplate/GeneralTemplate";
import LoginContent from "../../components/organisms/LoginContent/LoginContent";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <GeneralTemplate>
        <LoginContent titulo="Acesse sua conta" />
      </GeneralTemplate>
    );
  }
}

export default Login;
