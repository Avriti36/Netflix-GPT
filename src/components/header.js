import  { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
 
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'; 
import { useNavigate } from 'react-router-dom';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { togglegptSearchView } from '../utils/GPTSearchSlice';
import { changelanguage } from '../utils/configSlice';
 
 

const Header = () => {
 
   const user=useSelector(store =>store.user)
    const dispatch = useDispatch(); 
    const navigate=useNavigate();
    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

       const handleGPTSearch=()=>{
      dispatch(togglegptSearchView())

    }
  const handleSignout=()=>{
    
 
signOut(auth).then(() => {
   
}).catch((error) => {
  navigate('/error')
});


  }

  const handleLanguageChange=(e)=>{
    dispatch(changelanguage(e.target.value))
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
    <div className='absolute px-8  py-9 bg-gradient-to-b from-black z-50 flex  flex-col justify-between items-center   w-full md:flex-row '> 
        <img className='w-44 px-3 mx-auto md:mx-0' src={LOGO} alt="logo"/>

  {user && (<div className='flex p-2'> 
   <div className='flex justify-between p-2 items-center gap-4'>
   {showGptSearch && ( <select onChange={handleLanguageChange} className='bg-neutral-800 text-white' name="" id="">{SUPPORTED_LANGUAGES.map((lang)=>(
      <option className='' value={lang.identifier} key={lang.identifier}> {lang.name}</option>
    ))}</select>)}
  <button onClick={handleGPTSearch} className='mr-2 mt-8 md:mt-0 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-[1rem] text-md px-3 py-1.5 mb-1 dark:bg-purple-900 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>
    {showGptSearch?"Homepage" :"GPT Search"}
  </button>

  <div className='flex mt-8 md:mt-0 items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full px-3 py-1.5 me-2 mb-0 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700'>
    <img src={user?.photoURL} alt="user" className='h-10 w-10 rounded-full' />
    <button onClick={handleSignout} className='font-bold  text-sky-100'>Sign out</button>
  </div>
</div>
    </div> )}
    </div>
     
  )
}

export default Header