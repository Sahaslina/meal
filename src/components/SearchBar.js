import React, { useState } from 'react';
import './searchBar.css'; // Importing the CSS file

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
    // Add your search logic here
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#fff"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27a6.518 6.518 0 0 0 1.48-5.34C15.04 6.09 13.11 4.5 10.88 4.5 8.64 4.5 6.71 6.09 6.09 8.38c-.63 2.28.34 4.66 2.3 5.74 1.28.7 2.85.71 4.13.04l.27.28v.79l4.25 4.25c.41.41 1.09.41 1.5 0 .41-.41.41-1.09 0-1.5l-4.24-4.25zM10.88 12c-1.62 0-2.94-1.32-2.94-2.94 0-1.62 1.32-2.94 2.94-2.94 1.62 0 2.94 1.32 2.94 2.94 0 1.62-1.32 2.94-2.94 2.94z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
