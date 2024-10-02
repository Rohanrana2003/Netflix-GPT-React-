import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import languages from '../../utils/Constants/languageConstants';
import groq from '../../utils/openAI';
import { API_OPTIONS } from '../../utils/Constants/constants';
import { addGptMovies } from '../../utils/Redux/gptSlice';

const GptSearchBar = () => {

  const dispatch = useDispatch();

  const currentLang = useSelector(store => store.config.lang);
  const search = useRef(null);


  const getMovieTMDBData = async (movie) => {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const data = await response.json();
    return data?.results;
  }

  const handleGptSearch = async () => {
    if (!search.current.value) {
      alert('Please enter something!')
      return;
    }
    const chatCompletion = await getGroqChatCompletion();
    const movies = chatCompletion.choices[0]?.message?.content.split(',')

    const moviesData = movies.map(movie => getMovieTMDBData(movie));
    const tmdbResults = await Promise.all(moviesData);
    dispatch(addGptMovies({movieNames:movies, movieDetails:tmdbResults}));
  }

  async function getGroqChatCompletion() {

    const gptQuery = 'Act as a Movie Recommendation system and suggest some movies for the query: ' +
      search.current.value +
      '. only give me names of 5 movies comma seperated and don not wrtie any other text other then then the example result given ahead. Example Result: Gadar, Sholay, Don, Dhammal, Dhol';

    return groq.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "llama3-70b-8192",
    });

  }

  return (
    <div className=' pt-[40%] sm:pt-[25%] md:pt-[15%] flex justify-center '>

      <form onSubmit={(e) => e.preventDefault()} className='bg-[#898989] p-3 w-[85%] sm:w-[60%] lg:w-[40%] grid grid-cols-12 rounded-md '>

        <input ref={search}
          className='col-span-9 px-4 rounded-md outline-none'
          type="text" placeholder={languages[currentLang].placeholder} />

        <button onClick={handleGptSearch}
          className='bg-gray-900 px-1  py-2 rounded-md text-white col-span-3 -ml-3 sm:ml-2'>{languages[currentLang].search}</button>

      </form>

    </div>
  )
}

export default GptSearchBar
