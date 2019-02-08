import React, { Component } from "react";
import "./StarWars.css";

export class StarWars extends Component {
  handleClick = () => {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("is-nav-open");
  };

  render() {
    return (
      <div id="wrapper" className="wrapper">
        <div className="nav">
          <button className="nav__icon" onClick={this.handleClick}>Open</button>
          <div className="nav__body">Lorem dipsum</div>
        </div>
        <div className="content">
          Here is some content
        </div>
      </div>
    );
  }
}
