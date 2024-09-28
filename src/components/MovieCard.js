import React from 'react'
import { CARD_IMG_URL } from '../utils/constants'

const MovieCard = ({path}) => {
  return (
    <div className='min-w-44 pr-4 cursor-pointer text-white hover:scale-125'>
      <img src={CARD_IMG_URL + path} alt="CARD_IMG" />
    </div>
  )
}

export default MovieCard
