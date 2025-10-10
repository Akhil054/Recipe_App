// SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Trigger the callback with the current input
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder || "Search..."}
        style={{
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "50%",
          alignContent: "center",
            marginTop: "10px",
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
        }}
      />
      <button
        onClick={() => onSearch(query)}
        style={{
          marginLeft: "0px",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
          alignContent: "center",
            marginTop: "10px",
            marginBottom: "20px",
            // marginLeft: "auto",
            // marginRight: "auto",
            display: "block",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
