import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import KijContext from "./KijContext";

const Main = () => {
  const walue = useContext(KijContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/party">
          {walue.id} {walue.di}
        </Link>
        <Link to="/pokzy">
          Poka pokzy
        </Link>
      </header>
    </div>
  );
};

export default Main;
