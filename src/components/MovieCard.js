import React from 'react'
import { CARD_IMG_URL } from '../utils/constants'

const MovieCard = ({path}) => {
  return (
    <div className='w-40'>
      <img src={CARD_IMG_URL + path} alt="CARD_IMG" />
    </div>
  )
}

export default MovieCard
