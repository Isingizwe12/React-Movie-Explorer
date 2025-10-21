import React from "react";
import { useFavorites } from "../hooks/usefav";

function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center pt-24">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          You have no favorite movies yet ❤️
        </p>
        <p className="text-gray-500 text-sm">
          Browse and add some from the home page!
        </p>
      </div>
    );
  }

  return (
    <div className="pt-28 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {favorites.map((movie) => (
        <div
          key={movie.id}
          className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transform hover:scale-105 transition duration-500 bg-gray-800"
        >
          {/* Movie Poster */}
          <img
            src={movie.poster || "/placeholder.jpg"}
            alt={movie.title}
            className="w-full h-80 object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition"></div>

          {/* Movie Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
            <h3 className="text-xl font-bold mb-1">{movie.title}</h3>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-2">
              {movie.genre?.split(", ").map((g, i) => (
                <span
                  key={i}
                  className="text-xs bg-red-600 bg-opacity-90 px-2 py-1 rounded-full font-medium"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 line-clamp-3 mb-3">
              {movie.description}
            </p>

            {/* Remove Button */}
            <button
              onClick={() => removeFromFavorites(movie.id)}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-full font-semibold transition"
            >
              🗑️ Remove from Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
