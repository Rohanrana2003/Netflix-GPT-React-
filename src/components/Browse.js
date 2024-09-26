import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'

const Browse = () => {

  const getData = async() =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const response = await data.json();
    console.log(response.results)
  }


  useEffect(()=>{

    getData();
  },[])

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse

