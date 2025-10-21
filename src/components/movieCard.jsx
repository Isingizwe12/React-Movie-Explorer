import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie, onAddToFavorites }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
      {/* Movie Image & Details (clickable) */}
      <Link to={`/movie/${movie.id}`}>
        <div className="relative">
          <img
            src={movie.poster || "/placeholder.jpg"}
            alt={movie.title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <h3 className="text-2xl font-extrabold mb-2">{movie.title}</h3>
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
          </div>
        </div>
      </Link>

      {/* Description & Add to Favorites button */}
      <div className="p-4">
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {movie.description}
        </p>
        <button
          onClick={() => onAddToFavorites(movie)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          ❤️ Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
