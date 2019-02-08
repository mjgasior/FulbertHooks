import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDziadostfo, useCursor } from "./hooks";

export const Party = () => {
  const [fruit, setFruit] = useState("banana");
  const { count, setCount } = useDziadostfo(3);
  useCursor(args2 => console.log(args2));

  return (
    <div>
      <p>
        You clicked {fruit} {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setFruit("Apfelsaft")}>APFELZAVD</button>
      <Link to="/">Wroccc</Link>
    </div>
  );
};
