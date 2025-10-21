import React, { useState } from "react";
import MovieCard from "../components/movieCard";
import SearchBar from "../components/searchBar";
import CategoryFilter from "../components/categoryFilter";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { useFavorites } from "../hooks/usefav";
import strangerThingsImg from "../assets/images/stranger things.jpg";

function Home() {
  const { movies, loading, error } = useFetchMovies("https://api.tvmaze.com/shows");
  const { addToFavorites } = useFavorites();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [visibleCount, setVisibleCount] = useState(30);

  // Notification state
  const [notification, setNotification] = useState("");

  const allGenres = Array.from(new Set(movies.flatMap(movie => movie.genres)));

  const filteredMovies = movies
    .filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(movie => selectedGenre === "All" ? true : movie.genres.includes(selectedGenre));

  const handleAddToFavorites = (movie) => {
    addToFavorites(movie);
    setNotification(`${movie.title} is added to favorites`);
    setTimeout(() => setNotification(""), 3000); // disappear after 3 seconds
  };

  const handleSearchSubmit = (e) => e.preventDefault();

  return (
    <div className="relative ">
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50 transition">
          {notification}
        </div>
      )}

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
        </div>
      </div>

      {/* Search */}
      <div className="p-8 max-w-md mx-auto">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSearchSubmit={handleSearchSubmit}
        />
      </div>

      {/* Category Filter */}
      <div className="px-8">
        <CategoryFilter
          genres={allGenres}
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
        />
      </div>

      {/* Movie Grid */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

        {filteredMovies.slice(0, visibleCount).map(movie => (
          <MovieCard
            key={movie.id}
            movie={{
              id: movie.id,
              title: movie.name,
              poster: movie.image?.medium || "/placeholder.jpg",
              genre: movie.genres?.join(", "),
              description: movie.summary?.replace(/<[^>]+>/g, ""),
            }}
            onAddToFavorites={handleAddToFavorites}
          />
        ))}
      </div>

      {/* Show More */}
      {visibleCount < filteredMovies.length && (
        <div className="col-span-full text-center mt-6">
          <button
            onClick={() => setVisibleCount(prev => prev + 30)}
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
