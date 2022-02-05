import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMovies } from "../../features/Movies/movieSlice";
import "./movieCard.scss";
import Settings from "../../common/settings";
import Slider from "react-slick";

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
        <Slider {...Settings}>
          {getMovies.Response === "True" ? (
            getMovies.Search.map((movie, index) => (
              <MovieCardView key={index} movie={movie} />
            ))
          ) : (
            <div className="movie_error">
              <h1>{getMovies.Error}</h1>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default MovieCard;
