import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggetions from './GptSuggetions'
import { GPT_BACKGROUND_IMG } from '../../utils/Constants/constants'

const GptSearch = () => {
  document.title ='GPT - Netflix';

  return (
    <>
      <div className='fixed -z-10  bg-black'>
        <img className='h-screen w-screen lg:h-full object-cover object-right' src={GPT_BACKGROUND_IMG} alt="background-img" />
      </div>
      <div className=''>

        <GptSearchBar />
        <GptSuggetions />
      </div>
    </>

  )
}

export default GptSearch
