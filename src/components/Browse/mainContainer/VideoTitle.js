
const VideoTitle = () => {

  return (
    <div className="pt-[30px] sm:pt-52 md:pt-28 lg:pt-52 px-[30px] md:px-[64px] w-[100%] absolute z-30 text-white">

      <h1 className="text-[20px] md:text-5xl font-semibold py-4">Despicable Me 4</h1>

      <p className=" w-[70%] md:w-[50%] text-[10px] md:text-[20px]">Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad, forcing the family to go on the run.</p>

      <div className="flex h-[10px] md:h-fit">
        <button className="flex items-center mt-4 md:my-10 py-[12px] md:py-[10px] px-3 md:px-8 gap-2 text-black rounded-sm md:rounded-md 
                          font-semibold text-sm md:text-xl bg-white hover:bg-opacity-70">
          <svg className="w-3 h-3 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" fill="none"  role="img" viewBox="0 0 24 24"  data-icon="PlayStandard" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
            Play
        </button>

        <button className="flex items-center ml-2 md:ml-5 mt-4 md:my-10 py-[12px] md:py-[10px] px-2 md:px-8 gap-2 
                      text-white rounded-sm md:rounded-md font-semibold text-sm md:text-xl bg-gray-700 bg-opacity-70 hover:bg-opacity-50">
            <svg className="w-3 h-3 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" data-icon="CircleIStandard" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
            More Info
        </button>
      </div>

    </div>
  )
}

export default VideoTitle

