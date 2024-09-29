import React from 'react'
import { useSelector } from 'react-redux'
import languages from '../utils/languageConstants';

const GptSearchBar = () => {

  const currentLang = useSelector(store=>store.config.lang);

  return (
    <div className=' pt-[15%] flex justify-center '>

      <form onSubmit={(e)=>e.preventDefault()} className='bg-[#898989] p-5 w-1/2 grid grid-cols-12 rounded-md '>

        <input className='col-span-9 px-4 rounded-md outline-none'
            type="text" placeholder={languages[currentLang].placeholder}/>

        <button className='bg-gray-900 px-4 py-2 rounded-md text-white col-span-3 ml-2'>{languages[currentLang].search}</button>

      </form>

    </div>
  )
}

export default GptSearchBar
