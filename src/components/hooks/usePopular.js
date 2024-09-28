/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addPopularMovies } from "../../utils/Redux/movieSlice";

const usePopular = () =>{

    const dispatch = useDispatch();

    const getData = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const response = await data.json();
        dispatch(addPopularMovies(response.results))
    }

    useEffect(()=>{
        getData();
    }, [])
}
export default usePopular;