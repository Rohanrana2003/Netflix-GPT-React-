
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
      <div className='absolute bg-black bg-opacity-70 top-0 w-[100%] aspect-video' >
      
      </div>
    </div>
  )
}

export default MainContainer
