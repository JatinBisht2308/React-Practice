import React, { useState } from "react";

const DebouncedButtonClick = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleButtonClick = () => {
    console.log("Button clicked");
    setX(x + 1);
    setTimeout(() => {
      hanldeYChange();
    }, 1000);
  };
  const hanldeYChange = () => {
    setY(y + 1);
  };
  return (
    <div>
      <h1>Limited button click using debouncing</h1>
      <div>
        <button onClick={handleButtonClick}>FCUK ME</button>
        <button
          style={{
            marginLeft: "15px",
          }}
          onClick={() => {
            setX(0);
            setY(0);
          }}
        >
          RESET
        </button>
      </div>

      <p>{x}</p>
      <p>{y}</p>
    </div>
  );
};

export default DebouncedButtonClick;
