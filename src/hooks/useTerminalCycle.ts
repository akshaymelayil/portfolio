import { useEffect, useState } from "react";
import { systems } from "@/lib/data";

export function useTerminalCycle() {

  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setLogIndex((prev) => (
        (prev + 1) % systems.length
      ));
    }, 2500);

    return () => clearInterval(interval);

  }, []);

  return logIndex;
}