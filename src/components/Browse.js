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
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

    </div>
  )
}

export default Browse

