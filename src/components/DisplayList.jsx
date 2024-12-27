import React from "react";

export default function DisplayList() {
  const items = [
    "Jatin Bisht",
    "Revo Rent",
    "Startup",
    "Funding 10cr",
    "Shark Tank",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}
