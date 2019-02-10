import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav>
      <ul className="a">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counters">Show me counters</Link>
        </li>
        <li>
          <Link to="/pokemons">Show me the Pokemons</Link>
        </li>
        <li>
          <Link to="/starwars">Show me Star Wars</Link>
        </li>
        <li>
          <a href="https://swapi.co/">Star Wars API</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
