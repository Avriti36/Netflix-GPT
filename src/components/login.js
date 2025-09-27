 import React, { useRef, useState } from 'react'
 import Header from './header'
 import checkValidData from '../utils/validate'
 import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
 import {auth} from '../utils/firebase'
import{useNavigate} from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser} from '../utils/userSlice'; 
import { BG_URL } from '../utils/constant';

 const Login = () => {
    const [isSignIn,setToisSignIn]=useState(true);
    const [errorMessage,seterrorMessage]=useState(null)
    const navigate=useNavigate(); 
    const dispatch=useDispatch();
    const [Name,setName]=useState(null)
    
    const ToggleSignIinForm=()=>{
        setToisSignIn(!isSignIn)
    }

  
const email=useRef(null);
const password=useRef(null);
const name=useRef(null);


    const handleButtonClick=()=>{
        //Validate Form data
         
       const message=checkValidData(email.current.value,password.current.value)
         setName(message)
         seterrorMessage(message)
   
if(message) return  
 
if(!isSignIn){
    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
  const user = userCredential.user;
  
updateProfile(user, {
  displayName: name.current.value, photoURL: "https://th.bing.com/th/id/R.9ff2f1f826ec21b3573c86a490d8d624?rik=5zTDR%2bHu4KKTdQ&riu=http%3a%2f%2fi0.kym-cdn.com%2fphotos%2fimages%2ffacebook%2f000%2f892%2f608%2ffb9.jpg&ehk=c%2fmJShQGkLSdnBLjUdyNBaly5Osu0UWiMZ6gKgfehuo%3d&risl=&pid=ImgRaw&r=0"
}).then(() => {
   const {uid, email, displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL}))
    
  navigate('/browse')
}).catch((error) => {
seterrorMessage(error.message)
});
   
     navigate('/browse')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   seterrorMessage(errorCode+errorMessage)
   
setName(errorCode+errorMessage)
    
  });


}else{
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
     
      navigate('/browse')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
       seterrorMessage(errorCode+"-"+errorMessage)
     
  });


}
}
   return (
     <div className='relative '>
        <Header/>
   <div className='absolute'>
       <img src={BG_URL} alt="bg" />

    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white  ' action="">
    <h1 className='font-bold text-3xl text-white py-3'>{isSignIn? "Sign In":"Sign Up"}</h1>
        { !isSignIn &&    <input ref={name} type="text" placeholder='Name' className='bg-zinc-900/70 border border-white-600 p-4 my-2 w-full rounded-md  '/>}
        
     
        <input ref={email} type="text" placeholder='Email' className='bg-zinc-900/70 border border-white-600 p-4 my-2 w-full rounded-md '/>
       
        <input ref={password} type="password" placeholder='Password' className='bg-zinc-900/70 border border-white-600 p-4 my-2 w-full rounded-md  '/>
     <p className='text-red-500 font-bold text-sm'>{errorMessage}</p>
        <button className='bg-red-500 w-full p-4 m-4 mx-0 rounded-md' onClick={handleButtonClick}>{isSignIn? "Sign In":"Sign Up"}</button>
      
        <p className='p-3 m-0' onClick={ToggleSignIinForm}>{isSignIn?" New to Netflix, Sign up now": "Already registred, Sign Up now !"}</p>
    </form>
    </div>
   )
 }
 
 export default Login