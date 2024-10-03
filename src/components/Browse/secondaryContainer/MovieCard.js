import React from 'react'
import { CARD_IMG_URL } from '../../../utils/Constants/constants'

const MovieCard = ({path}) => {
  if(!path)return null;
  return (
    <div className='w-[100px] md:w-[140px] mr-3 cursor-pointer text-white  '>
      <img className='rounded-[4px]' src={CARD_IMG_URL + path} alt="CARD_IMG" />
    </div>
  )
}

export default MovieCard
