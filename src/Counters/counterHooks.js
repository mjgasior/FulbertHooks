import { useState, useEffect } from "react";

// useState and useEffect to set the document title with cleanup effect
export function useSimpleCounter(init) {
  const [count, setCount] = useState(init);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return function cleanup() {
      console.log("This cleanup will invoke only when count changes.");
      document.title = "Time to clean this mess up!";
    };
  }, [count]);

  return { count, setCount };
}

// useEffect with event subscription
export function useCursor(handleUp) {
  useEffect(() => {
    document.addEventListener("mouseup", handleUp);
    console.log("I subscribe to mouse up");
    return function cleanup() {
      document.removeEventListener("mouseup", handleUp);
      console.log("And I unsubscribe on every change in props");
    };
  });
}
