import React from "react";

function MovieCard({ movie, onAddToFavorites }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500 cursor-pointer">
      
      {/* Movie Poster */}
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      {/* Movie Info */}
      <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
        <h3 className="text-2xl font-extrabold mb-2 drop-shadow-lg">
          {movie.title}
        </h3>

        {/* Genres as badges */}
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
        <p className="text-sm text-gray-200 mb-3 drop-shadow-md line-clamp-3">
          {movie.description}
        </p>

        {/* Add to Favorites Button */}
        <button
          onClick={() => onAddToFavorites(movie)}
          className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition shadow-lg"
        >
          ❤️ Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
