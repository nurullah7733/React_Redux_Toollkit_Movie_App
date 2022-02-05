import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMovies } from "../../features/Movies/movieSlice";
import { getAllShows } from "../../features/Movies/movieSlice";
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
  const getShows = useSelector(getAllShows);

  const renderMovies =
    getMovies.Response === "True" ? (
      getMovies.Search.map((movie, index) => (
        <MovieCardView key={index} movie={movie} />
      ))
    ) : (
      <div>
        <h3 style={{ color: "#fff" }}>Movie Not Found!</h3>
      </div>
    );
  const renderShows =
    getShows.Response === "True" ? (
      getShows.Search.map((movie, index) => (
        <MovieCardView key={index} movie={movie} />
      ))
    ) : (
      <div>
        <h3 style={{ color: "#fff" }}>Shows Not Found!</h3>
      </div>
    );
  return (
    <div>
      <div className="movie_wrapper">
        <h1 style={{ color: "#fff", padding: "10px 0px" }}>Movies</h1>
        <div className="card_container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="movie_wrapper">
        <h1 style={{ color: "#fff", padding: "10px 0px" }}>Shows</h1>
        <div className="card_container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
