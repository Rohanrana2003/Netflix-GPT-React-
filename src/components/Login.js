import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);


  return (
    <div>
      <Header/>
      
      <div className='absolute '>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg" alt="background-img" />
      </div>
      
      <form action="" className='absolute text-white bg-black w-4/12 py-6 px-16 my-24 mx-auto right-0 left-0 rounded-[5px] bg-opacity-85'>

          <h1 className='text-[30px] font-bold my-7'>{isSignInForm? "Sign In" : "Sing Up"}</h1>

        { !isSignInForm && <input type="text" placeholder='Full Name'
              className='  mb-5 bg-[rgb(36,43,54)] p-[14px] w-full  rounded-[5px] bg-opacity-70'
        />}

        <input type="text" placeholder='Email Address'
              className='  mb-5 bg-[rgb(36,43,54)] p-[14px] w-full  rounded-[5px] bg-opacity-70'
        />

        <input type="password" placeholder='Password'
              className=' mb-5 bg-[rgb(36,43,54)] p-[14px] w-full  rounded-[5px] bg-opacity-70'
        />

        <button className='mb-10 bg-[rgb(229,9,20)] px-3 py-2 w-full rounded-[5px]  font-bold'>
          {isSignInForm? "Sign In" : "Sing Up"}
        </button>

        <p className='text-gray-300'>{isSignInForm? "New to Netflix? " : "Already a Member? "} 

          <span onClick={()=>setIsSignInForm(!isSignInForm)} 
                className='font-semibold text-white cursor-pointer hover:underline'>
                  {isSignInForm? "Sign up now." : "Sing In"}
          </span>

        </p>
      </form>
    </div>
  )
}

export default Login
