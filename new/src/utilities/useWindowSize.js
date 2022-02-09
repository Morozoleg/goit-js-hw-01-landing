import { useState, useEffect } from "react";

export default function () {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? innerWidth : undefined,
      height: isClient ? innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
