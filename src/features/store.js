import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});
