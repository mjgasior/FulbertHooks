import React, { Component } from "react";
import "./StarWars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";

export class StarWars extends Component {
  handleClick = () => {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("is-nav-open");
  };

  render() {
    return (
      <div id="wrapper" className="wrapper">
        <nav className="nav">
          <FontAwesomeIcon
            className="nav__icon"
            icon={faArrowAltCircleRight}
            onClick={this.handleClick}
          />
          <div className="nav__body">Lorem dipsum</div>
        </nav>
        <div className="content">
          Here is some content <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>
    );
  }
}
