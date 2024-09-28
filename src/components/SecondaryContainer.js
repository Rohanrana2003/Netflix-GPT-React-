import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)

  return (
    <div className='bg-black pl-10'>

      <div className='-mt-[212px] relative z-10'>
        <MovieList title={'Now Playing Movies'} movies={movies?.nowPlayingMovies}/>
        <MovieList title={'Top Movies'} movies={movies?.nowPlayingMovies}/>
        <MovieList title={'Trending Movies'} movies={movies?.nowPlayingMovies}/>
        <MovieList title={'Horror Movies'} movies={movies?.nowPlayingMovies}/>
        <MovieList title={'Comedy Movies'} movies={movies?.nowPlayingMovies}/>
        <MovieList title={'Action Movies'} movies={movies?.nowPlayingMovies}/>

      </div>
      

    </div>
  )
}

export default SecondaryContainer
