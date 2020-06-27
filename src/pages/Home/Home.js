import React, { Component } from "react";
import GeneralTemplate from "../../templates/GeneralTemplate/GeneralTemplate";
import HomeContent from "../../components/organisms/HomeContent/HomeContent";
import "./home.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      //esse array data é mutável
      data: [],
      filters: ["Todos", "Front", "Back", "Design", "Junior", "Pleno", "Senior"]
    };
  }

  componentDidMount = async () => {
    const getData = await this.props.data;
    this.setState({ data: getData });
  };

  onClick = async () => {
    const { inputValue } = this.state;
    const { data } = this.props; //imutável

    if (inputValue && data.length) {
      const result = await data.filter(item =>
        item.position.toLowerCase().includes(inputValue.toLowerCase())
      );
      this.setState({ inputValue: "", data: result });
    }
  };

  onChange = e => {
    const value = e.target.value;
    this.setState({ inputValue: value });
  };

  handleFilters = e => {
    const { data } = this.props;
    const value = e.target.id.toLowerCase();

    const result = data.filter(item => {
      switch (value) {
        case "todos":
          return item;
        default:
          return item.position.toLowerCase().includes(value);
      }
    });

    this.setState({ data: result });
  };

  render() {
    const { inputValue, data, filters } = this.state;
    const {logout, loggedUser} = this.props;

    return (
      <GeneralTemplate logout={logout} loggedUser={loggedUser}>
        {/*Todos os componentes aqui dentro sao filhos (children) do General Template*/}
        <HomeContent
          texto="Buscar"
          onClick={this.onClick}
          type="text"
          placeholder="O que voce procura?"
          titulo="TechJobs"
          value={inputValue}
          data={data}
          filters={filters}
          onChange={this.onChange}
          handleFilters={this.handleFilters}
        />
      </GeneralTemplate>
    );
  }
}

export default Home;
