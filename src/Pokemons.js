import React from "react";
import { Link } from "react-router-dom";
import { usePokemon, useCounter } from "./hooks";

export const Pokemons = () => {
  const { increment, decrement, count } = useCounter(-1);
  const pokeData = usePokemon();

  return (
    <div>
      <p>You have clicked {count} times with reducer counter</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Link to="/">Return to main</Link>
      <pre>{JSON.stringify(pokeData, null, 2)}</pre>
    </div>
  );
};
