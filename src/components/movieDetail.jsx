import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams(); // get movie id from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className=" pt-20 p-4 max-w-3xl mx-auto bg-white rounded shadow">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{movie.name}</h1>
      <img src={movie.image?.medium} alt={movie.name} className="mb-4" />
      <p className="mb-2">Genres: {movie.genres?.join(", ")}</p>
      <p dangerouslySetInnerHTML={{ __html: movie.summary }}></p>
    </div>
  );
}

export default MovieDetails;
