import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSimpleCounter, useCursor } from "./counterHooks";

export const Counters = () => {
  const [fruit, setFruit] = useState("banana");
  const { count, setCount } = useSimpleCounter(0);
  useCursor(mouseUpData => console.log(mouseUpData));

  return (
    <div>
      <p>
        You clicked {count} times and the fruit is {fruit}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment the counter</button>
      <button onClick={() => setFruit("apple")}>Set an apple</button>
      <p>Check the console to see the mouse up event log</p>
      <Link to="/">Return to main</Link>
    </div>
  );
};
