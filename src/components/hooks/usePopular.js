/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/Constants/constants";
import { addPopularMovies } from "../../utils/Redux/movieSlice";

const usePopular = () =>{

  const dispatch = useDispatch();
  const popularMovies = useSelector(store => store.movies?.popularMovies);

    const getData = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const response = await data.json();
        dispatch(addPopularMovies(response.results))
    }

    useEffect(()=>{
        !popularMovies && getData();
    }, [])
}
export default usePopular;