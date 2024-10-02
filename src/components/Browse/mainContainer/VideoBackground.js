
const VideoBackground = () => {


  return (
    <div className="w-[100%]">
      <iframe className="w-[100%] aspect-video"
        src={'https://www.youtube.com/embed/qQlr9-rF32A?loop=1&vq=hd1080&autoplay=1&mute=1'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
