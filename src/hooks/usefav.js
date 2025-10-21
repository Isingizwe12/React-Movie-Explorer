import { useState, useEffect } from "react";

export function useFavorites() {
  // Initialize favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to load favorites:", error);
      return [];
    }
  });

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add a movie to favorites
  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      if (!prev.find((m) => m.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  // Remove a movie from favorites
  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((m) => m.id !== movieId));
  };

  // Check if a movie is in favorites
  const isFavorite = (movieId) => {
    return favorites.some((m) => m.id === movieId);
  };

  return { favorites, addToFavorites, removeFromFavorites, isFavorite };
}
