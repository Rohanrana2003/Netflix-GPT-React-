import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../Browse/secondaryContainer/MovieList'

const GptSuggetions = () => {
 
  const {gptMovieNames, gptMovieDetails} = useSelector((store) => store.gpt);

  return (
    <div className='ml-0 sm:ml-10 md:ml-20 pb-9'>
        {
          gptMovieNames && gptMovieNames.map((movieName, i) =>(
            <MovieList key={movieName} title={movieName} movies={gptMovieDetails[i]}/>
          ))
        }
    </div>
  )
}

export default GptSuggetions
