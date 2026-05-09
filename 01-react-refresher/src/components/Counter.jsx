import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter - {count}</h1>
      <button onClick={increaseCount}>➕</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decreaseCount}>➖</button>
    </div>
  );
}

export default Counter;
