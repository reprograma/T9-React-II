import React, { Component } from "react";
import GeneralTemplate from "../../templates/GeneralTemplate/GeneralTemplate";
import LoginContent from "../../components/organisms/LoginContent/LoginContent";
import "./login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {};
  }

  onFinish = value => {
    this.props.history.push("/");
  };

  render() {
    const { login, loggedUser } = this.props;
    return (
      <GeneralTemplate loggedUser={loggedUser}>
        <LoginContent
          titulo="Acesse sua conta"
          onFinish={this.onFinish}
          login={login}
        />
      </GeneralTemplate>
    );
  }
}

export default Login;
