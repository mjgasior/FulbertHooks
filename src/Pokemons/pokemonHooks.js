import { useState, useEffect, useReducer } from "react";
import update from "immutability-helper";

// useState and useEffect to fetch data from PokeAPI (with delay)
export function usePokemon() {
  const [pokemonData, setPokemon] = useState({});

  const fetchPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");
    const result = await response.json();
    setTimeout(() => {
      setPokemon(result);
    }, 5000);
  };

  useEffect(() => {
    fetchPokemons();
    console.log(
      "Setting [] as control value assures that fetch is invoked only once."
    );
  }, []);

  return pokemonData;
}

// useEffect with event subscription
export function useCursor(handleUp) {
  useEffect(() => {
    document.addEventListener("mouseup", handleUp);
    console.log("I subscribe to mouse up.");
    return function cleanup() {
      document.removeEventListener("mouseup", handleUp);
      console.log("And I unsubscribe on every change in props.");
    };
  });
}

// useReducer and controlling an object
function bookIndexReducer(book, event) {
  switch (event.type) {
    case "CHANGE_AUTHORS_NAME":
      return update(book, { author: { firstName: { $set: event.name } } });
    case "CHANGE_TITLE":
      return { ...book, title: event.title };
    case "RESET":
      return event.init;
    default:
      return book;
  }
}

export function useBookIndex() {
  const init = {
    id: 173124,
    title: "The Idiot",
    author: {
      firstName: "Fyodor",
      lastName: "Dostoevsky"
    }
  };
  const [book, dispatch] = useReducer(bookIndexReducer, init);
  const reset = () => dispatch({ type: "RESET", init });
  return { book, dispatch, reset };
}
