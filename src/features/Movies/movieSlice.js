import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../components/apis/movieApi";
import APIKey from "../../components/apis/movieApiKeys";

// Movie
export const fatchMovie = createAsyncThunk("movies/fatchMovie", async () => {
  const movieCategory = "Harry";
  const res = await axios.get(
    `?&apiKey=${APIKey}&s=${movieCategory}&type=movie`
  );
  return res.data;
});
// Shows
export const fatchMovieShows = createAsyncThunk(
  "movies/fatchMovieShows",
  async () => {
    const movieCategory = "friends";
    const res = await axios.get(
      `?&apiKey=${APIKey}&s=${movieCategory}&type=series`
    );
    return res.data;
  }
);
export const DetailsOfMovieAndShow = createAsyncThunk(
  "movies/DetailsOfMovieAndShow",
  async (id) => {
    const res = await axios.get(`?&apiKey=${APIKey}&i=${id}&plot=full`);
    return res.data;
  }
);

// export const DetailsOfMovieAndShow = createAsyncThunk(
//   "movies/DetailsOfMovieAndShow",
//   async (imdbid) => {
//     const res = await axios.get(`?&apiKey=${APIKey}&i=${imdbid}&plot=full`);
//     return res;
//   }
// );

const initialState = {
  movies: {},
  shows: {},
  detailsOfMovieAndShows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, action) => {
    //   state.movies = action.payload;
    // },
    ClearDetailsOfMovieAndShow: (state) => {
      state.detailsOfMovieAndShows = {};
    },
  },
  extraReducers: {
    [fatchMovie.fulfilled]: (state, { payload }) => {
      console.log(payload);
      return { ...state, movies: payload };
    },
    [fatchMovieShows.fulfilled]: (state, { payload }) => {
      console.log(payload);
      return { ...state, shows: payload };
    },

    [DetailsOfMovieAndShow.fulfilled]: (state, action) => {
      console.log(action.payload);
      return { ...state, detailsOfMovieAndShows: action.payload };
    },
  },
});

export const { ClearDetailsOfMovieAndShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const detailsDataOfMovieAndShows = (state) =>
  state.movies.detailsOfMovieAndShows;

export default movieSlice.reducer;
