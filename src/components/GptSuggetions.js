import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSuggetions = () => {
 
  const {gptMovieNames, gptMovieDetails} = useSelector((store) => store.gpt);

  return (
    <div className='m-20'>
        {
          gptMovieNames && gptMovieNames.map((movieName, i) =>(
            <MovieList key={movieName} title={movieName} movies={gptMovieDetails[i]}/>
          ))
        }
    </div>
  )
}

export default GptSuggetions
