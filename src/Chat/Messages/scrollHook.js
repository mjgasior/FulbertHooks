import { useEffect, useRef } from "react";

export function useAutoScroll(canTriggerAutoScroll) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef && canTriggerAutoScroll) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end"
      });
    }
  }, [containerRef]);

  return containerRef;
}
