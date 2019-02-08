import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSimpleCounter, useCounter } from "./counterHooks";

export const Counters = () => {
  const [fruit, setFruit] = useState("banana");
  const { count, setCount } = useSimpleCounter(0);
  
  const { increment, decrement, level } = useCounter(-1);
  return (
    <>
      <div>
        <p>
          You clicked {count} times and the fruit is {fruit}
        </p>
        <button onClick={() => setCount(count + 1)}>
          Increment the counter
        </button>
        <button onClick={() => setFruit("apple")}>Set an apple</button>
        <Link to="/">Return to main</Link>
      </div>
      <div>
        <p>You have clicked {level} times with reducer counter.</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};
