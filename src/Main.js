import React, { useContext } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import OwnerContext from "./OwnerContext";

const Main = () => {
  const { firstName, lastName, id } = useContext(OwnerContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Context data (defaults overwritten in App.js):</p>
        <p>
          {firstName} {lastName} ({id})
        </p>
        <Link to="/counters">Show me counters</Link>
        <Link to="/pokemons">Show me the Pokemons</Link>
        <Link to="/starwars">Show me Star Wars</Link>
        <Link to="/chat">Show me Styled and WebSockets</Link>
      </header>
    </div>
  );
};

export default Main;
