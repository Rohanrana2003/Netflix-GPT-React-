import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import Header from './Header'
import useIndianMovies from './hooks/useIndianMovies';
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
import usePopular from './hooks/usePopular';
import useTopRated from './hooks/useTopRated';
import useUpcoming from './hooks/useUpcoming';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {

  useNowPlayingMovies();
  useTopRated();
  usePopular();
  useIndianMovies();
  useUpcoming();
  document.title ='Home - Netflix';
  const showGpt = useSelector(store => store.gpt.showGPT);
  
  return (
    <div>
      <Header/>
      {showGpt && <GptSearch/>}
      {!showGpt && <MainContainer/>}
      {!showGpt && <SecondaryContainer/>}

    </div>
  )
}

export default Browse

