import React from "react";
import { Link } from "react-router-dom";
import { useGady, useCounter } from "./hooks";

export const Pokzy = () => {
  const { increment, decrement, count } = useCounter(-1);
  const gady = useGady();

  return (
    <div>
      <p>CLIDZK {count}</p>
      <button onClick={increment}>PLUS</button>
      <button onClick={decrement}>MINUZ</button>
      <Link to="/">RETURNZ</Link>
      <pre>{JSON.stringify(gady, null, 2)}</pre>
    </div>
  );
};
