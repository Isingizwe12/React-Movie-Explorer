import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/movieCard";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { useFavorites } from "../hooks/usefav";
import strangerThingsImg from "../assets/images/stranger things.jpg";

function Home() {
  const { movies, loading, error } = useFetchMovies("https://api.tvmaze.com/shows");
  const [visibleCount, setVisibleCount] = useState(30);

  // ✅ Use the custom favorites hook here
  const { favorites, addToFavorites } = useFavorites();

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${strangerThingsImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-6xl font-extrabold mb-4 text-red-600 drop-shadow-lg">
            Stranger Things
          </h1>
          <p className="text-lg text-gray-200 mb-6 drop-shadow-md">
            Dive into the mysterious world and discover your favorite episodes.
          </p>
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition">
            Watch Now
          </button>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

{movies.slice(0, visibleCount).map((movie) => (
  <MovieCard
    key={movie.id}
    movie={{
      title: movie.name,
      poster: movie.image?.medium || "/placeholder.jpg",
      genre: movie.genres?.join(", "),
      description: movie.summary?.replace(/<[^>]+>/g, ""),
      id: movie.id, // pass id to MovieCard for linking
    }}
    onAddToFavorites={addToFavorites} 
  />
))}

      </div>

      {/* Show More Button */}
      {visibleCount < movies.length && (
        <div className="col-span-full text-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 30)}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
