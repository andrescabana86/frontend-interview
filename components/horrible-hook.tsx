import { useState, useCallback, useMemo } from "react";
import { HorribleHookButton } from "./horrible-hook-button";

export const HorribleHook = () => {
  const [counter, setCounter] = useState(0);

  console.log("create: formatCounter");
  function formatCounter(counterVal) {
    console.log("exec: formatCounter");
    console.log("compute expensive task");

    const value = counterVal > 6 ? 6 : counterVal;

    return `The counter value is ${value}`;
  }

  return (
    <div className="App">
      <div>{formatCounter(counter)}</div>

      <HorribleHookButton
        onClick={() => setCounter(prevState => ++prevState)}
      />
    </div>
  );
};
