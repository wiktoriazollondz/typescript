import React, { useState, useEffect } from "react";

export default function Counter(): React.ReactElement {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`Licznik wynosi: ${counter}`);
  }, [counter]);

  const textColor = counter % 2 === 0 ? "blue" : "red";

  const handleClick = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <p style={{ color: textColor }}>{counter}</p>
      <button onClick={handleClick} disabled={counter > 10}>
        Dodaj
      </button>
    </div>
  );
}