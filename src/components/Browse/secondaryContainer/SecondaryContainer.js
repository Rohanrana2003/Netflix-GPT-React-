import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)

  return (
    <div className='bg-[#000000] sm:pl-5 md:pl-10'>

      <div className=' mt-[-10px] md:-mt-[0] lg:-mt-[16%] relative z-10 pb-10'>
        <MovieList title={'Now Playing Movies'} movies={movies?.nowPlayingMovies}/>
        <MovieList title={'Top Indian Movies'} movies={movies?.indianMovies}/>
        <MovieList title={'Top Rated Movies'} movies={movies?.topRatedMovies}/>
        <MovieList title={'Popular Movies'} movies={movies?.popularMovies}/>
        <MovieList title={'Upcoming Movies'} movies={movies?.upcomingMovies}/>
      </div>
      

    </div>
  )
}

export default SecondaryContainer
