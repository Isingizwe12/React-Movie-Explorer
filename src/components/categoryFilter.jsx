import React from "react";

function CategoryFilter({ genres, selectedGenre, onSelectGenre }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6 justify-center">
      {/* All button */}
      <button
        onClick={() => onSelectGenre("All")}
        className={`px-4 py-2 rounded-full font-medium transition ${
          selectedGenre === "All"
            ? "bg-red-600 text-white"
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        }`}
      >
        All
      </button>

      {/* Genre buttons */}
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelectGenre(genre)}
          className={`px-4 py-2 rounded-full font-medium transition ${
            selectedGenre === genre
              ? "bg-red-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
