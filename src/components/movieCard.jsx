import React from "react";

function MovieCard({ movie, onAddToFavorites }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
      {/* Movie Poster */}
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
          {movie.genre}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {movie.description?.slice(0, 100)}...
        </p>

        {/* Add to Favorites Button */}
        <button
          onClick={() => onAddToFavorites(movie)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition"
        >
          ❤️ Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
