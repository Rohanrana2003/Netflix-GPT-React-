import Header from './Header'
import { useState, useRef } from 'react'
import { checkValidData } from '../utils/ValidateForm';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () =>{

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

  }

  return (
    <div>
      <Header/>
      
      <div className='absolute '>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg" alt="background-img" />
      </div>
      
      <form onSubmit={(e)=>e.preventDefault()} className='absolute text-white bg-black w-4/12 py-6 px-16 my-24 mx-auto right-0 left-0 rounded-[5px] bg-opacity-85'>

          <h1 className='text-[30px] font-bold my-7'>{isSignInForm? "Sign In" : "Sign Up"}</h1>

        { !isSignInForm && <input type="text" placeholder='Full Name'
              className='  mb-5 bg-[rgb(36,43,54)] p-[14px] w-full  rounded-[5px] bg-opacity-70'
        />}

        <input type="text" placeholder='Email Address' ref={email}
              className='  mb-5 bg-[rgb(36,43,54)] p-[14px] w-full  rounded-[5px] bg-opacity-70'
        />

        <input type="password" placeholder='Password' ref={password}
              className=' mb-5 bg-[rgb(36,43,54)] p-[14px] w-full  rounded-[5px] bg-opacity-70'
        />

        {errorMessage && <p className='text-[rgb(229,9,20)] mb-5 mt-[-15px] ml-2'>{errorMessage}</p>}

        <button onClick={handleSubmit}
            className='mb-10 bg-[rgb(229,9,20)] px-3 py-2 w-full rounded-[5px]  font-bold'>
          {isSignInForm? "Sign In" : "Sign Up"}
        </button>

        <p className='text-gray-300'>{isSignInForm? "New to Netflix? " : "Already a Member? "} 

          <span onClick={()=>setIsSignInForm(!isSignInForm)} 
                className='font-semibold text-white cursor-pointer hover:underline'>
                  {isSignInForm? "Sign up now." : "Sign In"}
          </span>

        </p>
      </form>
    </div>
  )
}

export default Login
