
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)

    if(!movies) return;

    const mainMovie = movies[0];

    const {id, original_title, overview} = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} description={overview}/>
      <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer
