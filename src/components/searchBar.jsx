// src/components/SearchBar.jsx
import React from "react";

function SearchBar({ searchTerm, onSearchChange, onSearchSubmit }) {
  return (
    <form
      onSubmit={onSearchSubmit}
      className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1"
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-transparent focus:outline-none text-sm px-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
      />
      <button
        type="submit"
        className="ml-2 text-blue-600 dark:text-yellow-400 hover:scale-110 transition"
      >
        🔍
      </button>
    </form>
  );
}

export default SearchBar;
