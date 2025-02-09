import React, { useState, useEffect } from "react";

const DebouncedButtonClick = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleButtonClick = () => {
    console.log("Button clicked");
    setX((prevX) => prevX + 1);
  };

  useEffect(() => {
    // when the component mounts then i dont want the timeout to be hit
    if(x===0) return;
    
    const debouncedClick = setTimeout(() => {
      setY((prev) => setY(prev + 1));
      console.log("called timeout",y+1);
    },1000);
     
    return () => {
      console.log("clearing",debouncedClick);
      clearTimeout(debouncedClick);}
  },[x]);

  return (
    <div>
      <h1>Limited button click using debouncing</h1>
      <div>
        <button onClick={handleButtonClick}>CLICK ME</button>
        <button
          style={{ marginLeft: "15px" }}
          onClick={() => {
            setX(0);
            setY(0);
          }}
        >
          RESET
        </button>
      </div>

      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
};

export default DebouncedButtonClick;
