import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../config/axios";
import "./Row.css";

const baseImageUrl = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchUrl, isLargePoster }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchMovies() {
      const movies = await axios.get(fetchUrl);
      setMovies(movies.data.results);
      return movies;
    }

    fetchMovies();
  }, [fetchUrl]);

  const youtubeOptions = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function handleImageClick(movie) {
    if (trailerUrl != "") {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const URLParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(URLParams.get("v"));
        })
        .catch((err) => {});
    }
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleImageClick(movie)}
            key={movie.id}
            className={`row_poster ${isLargePoster && "row_poster_large"}`}
            src={`${baseImageUrl}${
              isLargePoster ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
      {trailerUrl && <YouTube opts={youtubeOptions} videoId={trailerUrl} />}
    </div>
  );
}
