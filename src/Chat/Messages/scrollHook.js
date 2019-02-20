import { useEffect, useRef } from "react";

export function useAutoScroll() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end"
      });
    }
  }, [containerRef]);

  return containerRef;
}
