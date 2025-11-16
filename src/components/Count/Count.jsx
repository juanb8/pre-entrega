import "./Count.css";
import { useState } from "react";

export const Count = ({ btnText, onConfirm }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const confirm = () => {
    if (count > 0) {
      onConfirm(count);
    }
  };
  return (
    <div className="count-container">
      <div className="count-buttons">
        <button className="btn" onClick={decrement}>
          -
        </button>
        <span>{count}</span>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="btn btn-add"
        onClick={confirm}
        disable={(count === 0).toString()}
      >
        {btnText}
      </button>
    </div>
  );
};
