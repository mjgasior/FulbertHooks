import { useState, useEffect, useReducer } from "react";

// useState and useEffect to set the document title with cleanup effect
export function useSimpleCounter(init) {
  const [count, setCount] = useState(init);

  useEffect(() => {
    document.title = `You clicked ${count} times.`;
    return function cleanup() {
      console.log("This cleanup will invoke only when count changes.");
      document.title = "Time to clean this mess up!";
    };
  }, [count]);

  return { count, setCount };
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
  const [level, setCount] = useReducer(counterReducer, init);
  const increment = () => setCount({ type: "INC" });
  const decrement = () => setCount({ type: "DEC" });
  return { level, increment, decrement };
}