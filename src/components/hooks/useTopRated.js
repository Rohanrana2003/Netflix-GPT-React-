/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../../utils/Constants/constants";
import { addTopRatedMovies } from "../../utils/Redux/movieSlice";

const useTopRated = () => {

    const dispatch = useDispatch();
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);


    const getData = async()=>{
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addTopRatedMovies(data.results));
    }

    useEffect(()=>{
        !topRatedMovies && getData();
    }, [])
}
export default useTopRated
