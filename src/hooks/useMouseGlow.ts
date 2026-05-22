import { useEffect } from "react";

import {
  useMotionValue,
  useSpring,
} from "framer-motion";

export function useMouseGlow() {

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const smoothX = useSpring(mouseX, {
    damping: 40,
    stiffness: 160,
  });

  const smoothY = useSpring(mouseY, {
    damping: 40,
    stiffness: 160,
  });

  useEffect(() => {

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return {
    smoothX,
    smoothY,
  };
}