/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIndianMovies } from "../../utils/Redux/movieSlice";
import { API_OPTIONS } from "../../utils/constants";
const useIndianMovies = () => {

  const indianMovies = useSelector(store => store.movies?.indianMovies);

  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&with_original_language=hi', API_OPTIONS)
    const data = await response.json();
    dispatch(addIndianMovies(data.results));
  }
  useEffect(() => {
    !indianMovies && getData();
  }, [])
}
export default useIndianMovies