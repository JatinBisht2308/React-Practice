import React, { useState } from "react";

const DynamicUserInput = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>User input:{name}</h1>
    </div>
  );
};

export default DynamicUserInput;
