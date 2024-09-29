/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/Redux/userSlice';
import { LANG_OPTIONS, NETFLIX_LOGO } from '../utils/constants';
import { toggleShowGPT } from '../utils/Redux/gptSlice';
import { changeLang } from '../utils/Redux/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGPT = useSelector((store) => store.gpt.showGPT);

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

  const handleLanguage = (e) =>{
    dispatch(changeLang(e.target.value));
  }

  return (

    <div className='absolute w-[100%] pl-12  pt-1 bg-gradient-to-b from-black z-50 flex justify-between'>

      <img className='w-40 mt-4 ml-5 ' alt="netflix-logo" src={NETFLIX_LOGO} />

      {user &&

        <div className='flex items-center'>

          {
            showGPT && <select onChange={handleLanguage}
                className='h-8 w-20 outline-none rounded-lg bg-[#111827] text-white mr-5'>
              {
                LANG_OPTIONS.map((lang)=><option key={lang.key} value={lang.key}>{lang.name}</option>)
              }
              
            </select>
          }

            <button onClick={handleAI}
              className='my-5 bg-gradient-to-b from-[rgb(255,0,13)] to-[rgb(175,0,9)] h-fit py-[8px] text-sm px-3 cursor-pointer text-white rounded-md font-semibold' >
                {showGPT? 'Explore':'AI Recommender'}
            </button>

            <button onClick={handleSignout}
              className='m-5 mr-14 bg-gradient-to-b from-[rgb(255,0,13)] to-[rgb(175,0,9)] h-fit py-[8px] text-sm px-3 cursor-pointer text-white rounded-md font-semibold'           
             >Sign Out</button>

        </div>
      }

    </div>

  )
}

export default Header
