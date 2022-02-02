import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllShows } from "../../features/Movies/movieSlice";

const ShowCardView = ({ movie }) => {
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

const ShowCard = () => {
  const getMovies = useSelector(getAllShows);
  return (
    <div>
      <h1 style={{ color: "#fff", padding: "10px 0px 10px 0px" }}>Shows</h1>
      <div className="card_container">
        {getMovies.Response === "True" ? (
          getMovies.Search.map((movie, index) => (
            <ShowCardView key={index} movie={movie} />
          ))
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
};

export default ShowCard;
