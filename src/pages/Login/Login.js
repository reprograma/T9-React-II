import React, { Component } from "react";
import GeneralTemplate from "../../templates/GeneralTemplate/GeneralTemplate";
import LoginContent from "../../components/organisms/LoginContent/LoginContent";
import "./login.css";

class Login extends Component {
  constructor(){
    super();

    this.state={
      
    }
  }

  onFinish = (value) => {
    console.log("Dados enviados", value);
  }

  render() {
    return (
      <GeneralTemplate>
        <LoginContent titulo="Acesse sua conta" onFinish={this.onFinish}/>
      </GeneralTemplate>
    );
  }
}

export default Login;
