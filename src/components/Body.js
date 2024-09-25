import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/Redux/userSlice'

const Body = () => {

  const dispatch = useDispatch();

  
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, displayName, email} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
       dispatch(removeUser()); 
      }
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
