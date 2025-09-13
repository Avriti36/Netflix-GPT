import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
 
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'; 
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constant';
 
 

const Header = () => {
 
   const user=useSelector(store =>store.user)
    const dispatch = useDispatch(); 
    const navigate=useNavigate();
  const handleSignout=()=>{
    
signOut(auth).then(() => {
   
}).catch((error) => {
  navigate('/error')
});


  }
  useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
      
    const {uid, email, displayName,photoURL} = user;
    dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL}))
navigate('/browse')
  } else {
   dispatch(removeUser());
   navigate('/')
  }
});
return ()=>unsubscribe()  //unsubscribe when component un mounts
},[])
  return (
    <div className='absolute px-8 py-6 bg-gradient-to-b from-black z-10 flex  justify-between items-center  w-full'> 
        <img className='w-44 px-3' src={LOGO} alt="logo"/>

  {user && (<div className='flex p-2'> 
    <img src={user?.photoURL} user alt="user logo" className='h-10 w-10' />
    <button onClick={handleSignout} className='font-bold text-sky-100'>Sign out</button> 
    </div> )}
    </div>
     
  )
}

export default Header