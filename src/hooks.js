import { useState, useEffect, useReducer } from "react";

export function useDziadostfo(init) {
  const [count, setCount] = useState(init);

  useEffect(() => {
    document.title = `Klikłeś ${count} times`;
    return () => console.log("I'm going out!");
  });

  return { count, setCount };
}

export function useGady() {
  const [gady, setGady] = useState({});

  const fetchGady = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");
    const poksy = await response.json();
    setGady(poksy);
  };

  useEffect(() => {
    fetchGady();
  }, []);

  return gady;
}

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

export function useCursor(handleUp) {
  useEffect(() => {
    document.addEventListener("mouseup", handleUp);
    console.log("I SUBSCRIBE");
    return function cleanup() {
      document.removeEventListener("mouseup", handleUp);
      console.log("GOODBYE TIME TO LEAVE");
    };
  });
}
