import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Content.css";

const Content = () => {
  return (
    <>
      <div className="contentCoffee">
        Here is some content <FontAwesomeIcon icon={faCoffee} />
      </div>
      <div>
        <input type="checkbox" id="Luke" /> <label htmlFor="Luke">Luke Skywalker!</label>
      </div>
      <div>
        <input type="number" min="3" max="5" id="Chewie" /> <label htmlFor="Chewie">Number of Chewies!</label>
      </div>
      <ol>
        <li>Luke Skywalker</li>
        <li>Bobba Fett</li>
        <li>Han Solo</li>
        <li>Lando Calrissian</li>
        <li>Chewbacca</li>
      </ol>
    </>
  );
};

export default Content;
