import React, { Component } from "react";
import "./StarWars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import Content from "./Content";

export class StarWars extends Component {
  handleClick = () => {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("is-nav-open");
  };

  render() {
    return (
      <div id="wrapper" className="wrapper is-nav-open">
        <nav className="nav">
          <FontAwesomeIcon
            className="nav__icon"
            icon={faArrowAltCircleRight}
            onClick={this.handleClick}
          />
          <div className="nav__body">
            <Menu />
          </div>
        </nav>
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
}
