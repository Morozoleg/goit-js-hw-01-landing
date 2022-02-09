import { useState, useMemo } from "react";

/**
 *
 * @param {any} init
 * @param {any[]} deps
 */
export default function (init, deps) {
  const [state, setState] = useState(init);
  useMemo(() => {
    if (state !== init) {
      setState(init);
    }
  }, deps);
  return [state, setState];
}
