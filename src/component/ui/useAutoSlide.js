import { useCallback, useEffect, useState } from "react";

// Minimal autoplaying index cycler used by the hero crossfade.
const useAutoSlide = (count, interval = 5000) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return undefined;
    const t = setTimeout(() => go(index + 1), interval);
    return () => clearTimeout(t);
  }, [index, paused, interval, count, go]);

  return { index, go, setPaused };
};

export default useAutoSlide;
