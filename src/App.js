import React, { Component } from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import OwnerContext from "./OwnerContext";
import { Counters } from "./Counters/Counters";
import { Pokemons } from "./Pokemons/Pokemons";
import './App.css';
import { StarWars } from "./StarWars/StarWars";

class App extends Component {
  render() {
    return (
      <OwnerContext.Provider
        value={{ id: "78235346", firstName: "Over", lastName: "Ride" }}
      >
        <Route component={Main} path="/" exact />
        <Route component={Counters} path="/counters" />
        <Route component={Pokemons} path="/pokemons" />
        <Route component={StarWars} path="/starwars" />
      </OwnerContext.Provider>
    );
  }
}

export default App;
