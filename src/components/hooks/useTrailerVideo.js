/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../../utils/Redux/movieSlice';
import { API_OPTIONS } from '../../utils/constants';

const useTrailerVideo = (movie_id) => {

    const dispatch = useDispatch();

    const getBackground = async () => {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_OPTIONS);
        const data = await response.json();

        const x = data.results.filter((video) => video.name === "Official Trailer");
        const trailer = x.length ? x[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));

    };
    useEffect(
        () => {
        getBackground();
    }, []);
}

export default useTrailerVideo
