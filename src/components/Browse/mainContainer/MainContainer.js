
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {


  return (
    <div>
      <VideoTitle/>
      <VideoBackground/>
      <div className='absolute bg-black bg-opacity-70 top-0 w-[100%] aspect-video' >
      </div>
    </div>
  )
}

export default MainContainer
