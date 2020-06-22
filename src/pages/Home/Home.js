import React, { Component } from "react";
import GeneralTemplate from "../../templates/GeneralTemplate/GeneralTemplate";
import HomeContent from "../../components/organisms/HomeContent/HomeContent";
import "./home.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: ""
    };
  }

  onClick = () => {
    console.log("click");
  };

  onChange = () => {
    console.log("mudou");
  };

  render() {
    return (
      <GeneralTemplate>
        {/*Todos os componentes aqui dentro sao filhos (children) do General Template*/}
        <HomeContent
          texto="Buscar"
          onClick={this.onClick}
          type="text"
          placeholder="O que voce procura?"
          value={this.state.inputValue}
          onChange={this.onChange}
        />
      </GeneralTemplate>
    );
  }
}

export default Home;
