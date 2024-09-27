import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  console.log(title, movies)
  
  return (
    <div>

      <h1>{title}</h1>

      <div>
        {movies?.map(movie => <MovieCard key={movie.id} path={movie.poster_path}/>)}
      </div>

    </div>
  )
}

export default MovieList
