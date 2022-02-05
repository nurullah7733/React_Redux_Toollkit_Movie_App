import React, { useEffect } from "react";
import MovieCard from "../MovieCard/movieCard";
import { fatchMovie, fatchMovieShows } from "../../features/Movies/movieSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const movieTerms = "harry";
  const showTerms = "friends";
  useEffect(() => {
    dispatch(fatchMovie(movieTerms));
    dispatch(fatchMovieShows(showTerms));
  }, [dispatch]);

  return (
    <div>
      <div className="banner_img"></div>
      <MovieCard />
    </div>
  );
};

export default Home;
