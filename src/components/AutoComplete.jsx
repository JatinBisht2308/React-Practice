import { useState, useEffect, useCallback } from "react";

const AutoComplete = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [availableOptions, setAvailableOptions] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ Added loading state
  const [error, setError] = useState(null); // ✅ Added error state

  // ✅ Debounced search function to prevent excessive API calls
  const handleSearch = useCallback(() => {
    if (!searchTerm.trim()) return; // ✅ Prevent empty searches

    setLoading(true);
    setError(null);

    fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.recipes) {
          setAvailableOptions(data.recipes);
        }
      })
      .catch((error) => {
        setError("Failed to fetch results");
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false)); // ✅ Ensuring state resets after API call
  }, [searchTerm]);

  // ✅ Debounced useEffect to reduce API calls on fast typing
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 300); // ✅ 300ms delay before API call

    return () => clearTimeout(delayDebounceFn); // ✅ Cleanup function
  }, [searchTerm, handleSearch]);

  return (
    <div style={{ marginBottom: "500px", border: "2px solid black" }}>
      <h1>Autocomplete suggestions on search</h1>
      <input
      style={{
        width:"400px",
        height:"20px"
      }}    
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search recipes..."
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul
      style={{
        listStyle: "none",
        padding: "5px",
        width:"400px",
        margin:"auto",
        display:"flex",
        alignItems:"flex-start",
        flexDirection:"column",
        gap:"4px",
        background:"lightBlue",
      }}
      >
        {availableOptions.map((item) => (
          <li
            key={item.id} // ✅ Added unique key for performance
            style={{ cursor: "pointer" }}
            onClick={() => setSearchTerm(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
