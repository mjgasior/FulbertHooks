import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Main from "./Main";
import { Party } from "./Others";
import KijContext from "./KijContext";
import { Pokzy } from "./Pokzy";

class App extends Component {
  render() {
    return (
      <KijContext.Provider value={{ id: "nad", di: "pisuje" }}>
        <Route component={Main} path="/" exact />
        <Route component={Party} path="/party" />
        <Route component={Pokzy} path="/pokzy" />
      </KijContext.Provider>
    );
  }
}

export default App;
