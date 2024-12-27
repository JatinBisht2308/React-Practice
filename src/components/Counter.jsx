import React,{useState} from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>+</button>
      <h1>{num}</h1>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

export default Counter;
