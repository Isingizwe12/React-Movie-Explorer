// src/components/SearchBar.jsx
import React from "react";

function SearchBar({ searchTerm, onSearchChange, onSearchSubmit }) {
  return (
    <form
      onSubmit={onSearchSubmit}
      className="flex items-center w-full bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition"
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 bg-transparent focus:outline-none text-base text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 px-2"
      />
      <button
        type="submit"
        className="ml-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-medium transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
