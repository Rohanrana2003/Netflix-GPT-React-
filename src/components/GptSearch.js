import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggetions from './GptSuggetions'
import { GPT_BACKGROUND_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={GPT_BACKGROUND_IMG} alt="background-img" />
      </div>
      <GptSearchBar/>
      <GptSuggetions/>
    </div>
  )
}

export default GptSearch
