import React from "react";
import Home from "./pages/Home/Home";
import data from "./data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home data={data} />
    </div>
  );
}

export default App;
