import { useState, useEffect } from "react";

const LifeCycleMethod = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component Did Mount");

    return () => console.log("Component Un mount");
  }, []);
  useEffect(() => {
    console.log("Component Did Update");
  }, [count]);
  return (
    <div>
      <h1>lifeCycleMethod Explaining</h1>
      <button onClick={() => setCount((prev) => setCount(prev + 1))}>
        Count + 1
      </button>
    </div>
  );
};

export default LifeCycleMethod;
