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
    console.log("O componente foi montado!!!");
    const getData = await this.props.data;
    this.setState({ data: getData });
    console.log(this.state.data);
  };

  // componentDidUpdate = () => {

  //   if(this.state.inputValue === ""){
  //     this.setState({inputValue: "oi"})
  //     console.log("O componente foi atualizado!!!");
  //   }
  // }

  onClick = async () => {
    const { inputValue } = this.state;
    const { data } = this.props; //imutável

    if (inputValue && data.length) {
      const result = await data.filter(item =>
        item.position.toLowerCase().includes(inputValue.toLowerCase())
      );

      console.log({ result });
      this.setState({ inputValue: "", data: result });
    } else {
      console.log({ data });
    }
  };

  onChange = e => {
    const value = e.target.value;
    console.log(value);
    this.setState({ inputValue: value });
  };

  render() {
    console.log("O Render foi chamado!!!");
    const { inputValue, data } = this.state;

    return (
      <GeneralTemplate>
        {/*Todos os componentes aqui dentro sao filhos (children) do General Template*/}
        <HomeContent
          texto="Buscar"
          onClick={this.onClick}
          type="text"
          placeholder="O que voce procura?"
          value={inputValue}
          data={data}
          onChange={this.onChange}
        />
      </GeneralTemplate>
    );
  }
}

export default Home;
