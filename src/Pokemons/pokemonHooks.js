import { useState, useEffect, useReducer } from "react";

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
  }, []);

  return pokemonData;
}

// useReducer and controlling a counter
function counterReducer(count, event) {
  switch (event.type) {
    case "INC":
      return count + 1;
    case "DEC":
      return count - 1;
    default:
      return count;
  }
}

export function useCounter(init) {
  const [count, setCount] = useReducer(counterReducer, init);
  const increment = () => setCount({ type: "INC" });
  const decrement = () => setCount({ type: "DEC" });
  return { count, increment, decrement };
}