import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          // setCount(count + 1); // "Falsch"
          // setCount(count + 1); // Falsch
          setCount((prevCount) => prevCount + 1); // Richtig
          // setCount((count) => count + 1); // Richtig
        }}
      >
        Increment
      </button>
      <p>Current value: {count}</p>
    </div>
  );
};

export default Counter;
