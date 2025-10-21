import React from "react";
import { useFavorites } from "../hooks/usefav";

function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  if (favorites.length === 0) {
    return <p className="text-center mt-10 text-gray-700 dark:text-gray-300">You have 0 favorite movies</p>;
  }

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {favorites.map((movie) => (
        <div
          key={movie.id}
          className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500"
        >
          {/* Poster + overlay */}
          <img
            src={movie.poster || "/placeholder.jpg"}
            alt={movie.title}
            className="w-full h-80 object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div> */}

          {/* Movie Info */}
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <h3 className="text-2xl font-extrabold mb-2 drop-shadow-lg">{movie.title}</h3>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-2">
              {movie.genre?.split(", ").map((g, i) => (
                <span
                  key={i}
                  className="text-xs bg-red-600 bg-opacity-80 px-2 py-1 rounded-full font-semibold"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-200 mb-3 drop-shadow-md overflow-hidden max-h-20">
              {movie.description}
            </p>
          </div>

          {/* Remove from Favorites Button */}
          <div className="absolute bottom-4 left-4 z-20">
            <button
              onClick={() => removeFromFavorites(movie.id)}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full font-semibold transition"
            >
              🗑️ Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
