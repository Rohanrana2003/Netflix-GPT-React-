import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector((store)=>store.user);

  const handleSignout = () =>{

      signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
      });
  }

  return (

    <div className='absolute w-screen pl-12  pt-1 bg-gradient-to-b from-black z-10 flex justify-between'>

      <img className='w-52' alt="netflix-logo" 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />

      {user && <div className='m-5 mr-24 bg-[rgb(229,9,20)] h-fit py-[8px] text-sm px-3 cursor-pointer text-white rounded-md font-semibold 
                    hover:bg-[rgb(201,8,18)] '>

        <button onClick={handleSignout}>Sign Out</button>

      </div>}
    </div>

  )
}

export default Header
 