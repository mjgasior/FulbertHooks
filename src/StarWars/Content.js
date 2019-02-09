import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Content.css";

const Content = () => {
  return (
    <>
      <div>
        Here is some content <FontAwesomeIcon icon={faCoffee} />
      </div>
      <div>
        <input type="checkbox" id="Luke" /> <label for="Luke">Luke Skywalker!</label>
      </div>
      <div>
        <input type="number" min="3" max="5" id="Chewie" /> <label for="Chewie">Number of Chewies!</label>
      </div>
    </>
  );
};

export default Content;
