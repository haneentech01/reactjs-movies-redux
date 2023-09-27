import axios from "axios";
import { AllMOVIES, MOVIEAPI } from "../types/moviesType";

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MOVIEAPI);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(`
  "https://api.themoviedb.org/3/movie/popular?api_key=913eae2a497703cb595b7d2a562c50c4&qury=${word}&language=ar";
    `);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`
  https://api.themoviedb.org/3/movie/popular?api_key=913eae2a497703cb595b7d2a562c50c4&language=ar&page=${page}
  `);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
