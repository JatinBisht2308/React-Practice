import React, { useState, useEffect } from "react";

export default function SimpleFetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        const jsonData = await response.json();
        setData(jsonData); // Save parsed data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setData("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {loading ? (
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Loading...
        </p>
      ) : (
        <pre
          style={{
            width: "100%",
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderRadius: "5px",
            overflow: "auto",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
