import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie, onAddToFavorites }) {
  return (
    <div className="relative py-8 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">

      {/* Only this clickable area goes to movie details */}
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.poster || "/placeholder.jpg"}
          alt={movie.title}
          className="w-full h-80 object-cover"
        />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div> */}

        <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
          <h3 className="text-2xl font-extrabold mb-2 drop-shadow-lg">{movie.title}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {movie.genre?.split(", ").map((g, i) => (
              <span key={i} className="text-xs bg-red-600 bg-opacity-80 px-2 py-1 rounded-full font-semibold">{g}</span>
            ))}
          </div>
          <p className="text-sm text-gray-200 mb-3 drop-shadow-md overflow-hidden max-h-20">{movie.description}</p>
        </div>
      </Link>

      {/* Add to Favorites button */}
      <div className="absolute bottom-0 left-4 z-20">
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
