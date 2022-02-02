import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  DetailsOfMovieAndShow,
  detailsDataOfMovieAndShows,
  ClearDetailsOfMovieAndShow,
} from "../../features/Movies/movieSlice";
import { FaStar, FaThumbsUp, FaFilm, FaCalendarAlt } from "react-icons/fa";
import "./movieDetails.scss";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { imdbid } = useParams();
  const details = useSelector(detailsDataOfMovieAndShows);
  useEffect(() => {
    dispatch(DetailsOfMovieAndShow(imdbid));

    return () => dispatch(ClearDetailsOfMovieAndShow());
  }, [dispatch, imdbid]);
  return (
    <>
      {Object.keys(details).length === 0 ? (
        <h1
          style={{
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          ...Loading
        </h1>
      ) : (
        <div className="movie_details">
          <div className="movie_details_left_side">
            <div className="left_info">
              <div className="title">
                <h1>{details.Title}</h1>
              </div>
              <span className="icons">
                IMDB Rating <FaStar style={{ color: "orange" }} /> :{" "}
                {details.imdbRating}
              </span>
              <span className="icons">
                IMDB Votes <FaThumbsUp style={{ color: "#ff7979" }} />:{" "}
                {details.imdbVotes}
              </span>
              <span className="icons">
                Runtime <FaFilm style={{ color: "#ab8787" }} />:{" "}
                {details.Runtime}
              </span>
              <span className="icons">
                Year <FaCalendarAlt style={{ color: "#efafaf" }} /> :{" "}
                {details.Year}
              </span>
              <div className="description">{details.Plot}</div>
              <div className="deep_info">
                <div className="deep_info_inner">
                  <div className="director">
                    <span>Director</span>
                    <span className="inner_info">{details.Director}</span>
                  </div>
                  <div className="stars">
                    <span>Stars</span>
                    <span className="inner_info">{details.Actors}</span>
                  </div>
                  <div className="generes">
                    <span>Generes</span>
                    <span className="inner_info">{details.Genre}</span>
                  </div>
                  <div className="language">
                    <span>Language</span>
                    <span className="inner_info">{details.Genre}</span>
                  </div>
                  <div className="awards">
                    <span>Awards</span>
                    <span className="inner_info">{details.Awards}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="movie_details_right_side">
            <div>
              <img src={details.Poster} alt={details.Title} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
