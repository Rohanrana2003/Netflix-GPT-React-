/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/Redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";

const useNowPlayingMovies = () =>{

    const dispatch = useDispatch();

    const getData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const response = await data.json();
        dispatch(addNowPlayingMovies(response.results));
    }

    useEffect(() => {
        getData();
    }, [])
}

export default useNowPlayingMovies;