import React, { useEffect } from "react";
import MovieCard from "../MovieCard/movieCard";
import { fatchMovie, fatchMovieShows } from "../../features/Movies/movieSlice";
import { useDispatch } from "react-redux";

import ShowCard from "../ShowCard/showCard";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchMovie());
    dispatch(fatchMovieShows());
  }, [dispatch]);

  return (
    <div>
      <div className="banner_img"></div>
      <MovieCard />
      <ShowCard />
    </div>
  );
};

export default Home;
