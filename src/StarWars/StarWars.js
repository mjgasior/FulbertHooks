import React from "react";
import { Link } from 'react-router-dom';
import "./StarWars.css";

export const StarWars = () => {
  return (
    <>
      <div className="column left">
        <Link to="/">Return to main</Link>
      </div>
      <div className="column right">b</div>
    </>
  );
};
