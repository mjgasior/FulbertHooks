import React from "react";
import { Link } from "react-router-dom";
import { usePokemon, useCursor, useBookIndex } from "./pokemonHooks";

export const Pokemons = () => {
  const pokeData = usePokemon();
  useCursor(mouseUpData => console.log(mouseUpData));
  const { book, dispatch, reset } = useBookIndex();

  const setName = () =>
    dispatch({ type: "CHANGE_AUTHORS_NAME", name: "Fulbert" });

  const setTitle = () => dispatch({ type: "CHANGE_TITLE", title: "Catch-22" });

  return (
    <>
      <div>
        <pre>{JSON.stringify(book, null, 2)}</pre>
        <button onClick={setName}>Set first name Fulbert</button>
        <button onClick={setTitle}>Set title "Catch-22"</button>
        <button onClick={reset}>Set title "Catch-22"</button>
      </div>
      <div>
        <p>Check the console to see the mouse up event log.</p>
        <Link to="/">Return to main</Link>
        <pre>{JSON.stringify(pokeData, null, 2)}</pre>
      </div>
    </>
  );
};
