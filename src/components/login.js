 import React, { useState } from 'react'
 import Header from './header'
 const Login = () => {
    const [isSignIn,setToisSignIn]=useState(true);
    const ToggleSignIinForm=()=>{
        setToisSignIn(!isSignIn)
    }
   return (
     <div className='relative '>
        <Header/>
   <div className='absolute'>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="bg" />

    </div>
    <form className='w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white  ' action="">
    <h1 className='font-bold text-3xl text-white py-3'>{isSignIn? "Sign In":"Sign Up"}</h1>
        { !isSignIn && <input type="text" placeholder='Name' className='bg-zinc-900/70 border border-white-600 p-4 my-2 w-full rounded-md  '/>}
     
        <input type="text" placeholder='Email' className='bg-zinc-900/70 border border-white-600 p-4 my-2 w-full rounded-md '/>
       
        <input type="password" placeholder='Password' className='bg-zinc-900/70 border border-white-600 p-4 my-2 w-full rounded-md  '/>
     
        <button className='bg-red-500 w-full p-4 m-4 mx-0 rounded-md'>{isSignIn? "Sign In":"Sign Up"}</button>
      
        <p className='p-3 m-0' onClick={ToggleSignIinForm}>{isSignIn?" New to Netflix, Sign up now": "Already registred, Sign Up now !"}</p>
    </form>
    </div>
   )
 }
 
 export default Login