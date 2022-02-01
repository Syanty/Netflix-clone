import { useState, useEffect } from "react";
import axios from "../config/axios";
import api from "../config/api";
import "./Banner.css";
export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(api.fetchNetflixOriginals);
      const randNumber = Math.floor(
        Math.random() * response.data.results.length - 1
      );
      setMovie(response.data.results[randNumber]);
      return response;
    }

    fetchMovies();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                https://image.tmdb.org/t/p/original${movie?.backdrop_path}
            )`,
        backgroundPosition: "center center",
      }}
    >
      {/* banner contents */}
      {movie.backdrop_path /* prevent button to be shown before image loads */ && (
        <div className="banner_contents">
          {/* title */}
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_title}
          </h1>
          {/* banner buttons */}
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>

          <div className="banner_description">
            {truncate(movie?.overview, 500)}
          </div>
        </div>
      )}
      <div className="banner_bottomGradient"></div>
    </header>
  );
}
