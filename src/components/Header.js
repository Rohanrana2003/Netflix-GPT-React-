/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/Redux/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';
import { toggleShowGPT } from '../utils/Redux/gptSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    return () => unsubscribe();
  }, [])

  const handleSignout = () => {

    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate('/error');
      });
  }

  const handleAI = () =>{
    dispatch(toggleShowGPT());
  }

  return (

    <div className='absolute w-[100%] pl-12  pt-1 bg-gradient-to-b from-black z-50 flex justify-between'>

      <img className='w-40 mt-4 ml-5 ' alt="netflix-logo" src={NETFLIX_LOGO} />

      {user &&

        <div className='flex'>

            <button onClick={handleAI}
              className='my-5 bg-gradient-to-b from-[rgb(255,0,13)] to-[rgb(175,0,9)] h-fit py-[8px] text-sm px-3 cursor-pointer text-white rounded-md font-semibold' >
                AI Recommender</button>

            <button onClick={handleSignout}
              className='m-5 mr-14 bg-gradient-to-b from-[rgb(255,0,13)] to-[rgb(175,0,9)] h-fit py-[8px] text-sm px-3 cursor-pointer text-white rounded-md font-semibold'           
             >Sign Out</button>

        </div>
      }

    </div>

  )
}

export default Header
