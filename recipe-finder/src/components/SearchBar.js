import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for recipes..."
          aria-label="Search recipes"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;