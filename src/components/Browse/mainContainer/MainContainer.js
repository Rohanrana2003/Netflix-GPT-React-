
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {


  return (
    <div className='pt-[30%] bg-black sm:pt-0'>
      <VideoTitle/>
      <VideoBackground/>
      <div className='absolute bg-black bg-opacity-70 top-0 w-[100%] aspect-video mt-[30%] sm:mt-0' >
      </div>
    </div>
  )
}

export default MainContainer
