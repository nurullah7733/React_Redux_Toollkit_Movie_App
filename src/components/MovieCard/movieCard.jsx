import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMovies } from "../../features/Movies/movieSlice";
import "./movieCard.scss";

const MovieCardView = ({ movie }) => {
  return (
    <div>
      <Link to={`movie/${movie.imdbID}`}>
        <div className="card_item">
          <div className="card_top">
            <div>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          </div>
          <div className="card_bottom">
            <div className="card_info">
              <h4>{movie.Title}</h4>
              <h5>{movie.Year}</h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const MovieCard = () => {
  const getMovies = useSelector(getAllMovies);
  return (
    <div>
      <h1 style={{ color: "#fff", padding: "10px 0px" }}>Movies</h1>
      <div className="card_container">
        {getMovies.Response === "True" ? (
          getMovies.Search.map((movie, index) => (
            <MovieCardView key={index} movie={movie} />
          ))
        ) : (
          <div className="movie_error">
            <h1>...Loading</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
