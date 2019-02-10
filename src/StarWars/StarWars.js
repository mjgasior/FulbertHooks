import React, { Component } from "react";
import "./StarWars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import Content from "./Content";

export class StarWars extends Component {
  state = {};

  handleClick = () => {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("is-nav-open");
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    console.log(prevState);
    return {};
  }

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
        <div style={{ flexGrow: 1 }}>
          <div className="content">
            <Content />
          </div>
          <div className="stripe"/>
        </div>
      </div>
    );
  }
}
