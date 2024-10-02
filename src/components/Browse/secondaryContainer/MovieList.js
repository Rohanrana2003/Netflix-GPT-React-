import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

  return (
    <div className=' pl-5 '>

      <h1 className='text-[20px] md:text-[26px] font-semibold py-1 pt-8 text-white '>{title}</h1>


      <div className="flex overflow-x-scroll no-scrollbar">

        <div className='flex'>
          {movies?.map(movie => <MovieCard key={movie.id} path={movie.poster_path} />)}
        </div>

      </div>



    </div>
  )
}

export default MovieList
