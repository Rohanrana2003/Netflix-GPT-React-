import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggetions from './GptSuggetions'
import { GPT_BACKGROUND_IMG } from '../../utils/Constants/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img src={GPT_BACKGROUND_IMG} alt="background-img" />
      </div>
      <GptSearchBar/>
      <GptSuggetions/>
    </div>
  )
}

export default GptSearch
