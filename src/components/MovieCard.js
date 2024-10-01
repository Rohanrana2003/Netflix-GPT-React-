import React from 'react'
import { CARD_IMG_URL } from '../utils/constants'

const MovieCard = ({path}) => {
  if(!path)return null;
  return (
    <div className='w-[168px] mr-6 cursor-pointer text-white  '>
      <img className='rounded-lg' src={CARD_IMG_URL + path} alt="CARD_IMG" />
    </div>
  )
}

export default MovieCard
