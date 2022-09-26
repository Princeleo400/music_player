import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Container from "./components/container";

const App = () => {
  return (
    <div className="App container">
      <Header />
      <Container />
    </div>
  );
};

export default App;
