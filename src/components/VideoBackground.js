import { useSelector } from "react-redux";
import useTrailerVideo from "./hooks/useTrailerVideo";


const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useTrailerVideo(movie_id);

  return (
    <div className="w-[100%]">
      <iframe className="w-[100%] aspect-video"
        src={'https://www.youtube.com/embed/'+ trailerVideo?.key + '?autoplay=1&mute=1'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
