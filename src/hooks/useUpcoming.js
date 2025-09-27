import  { useEffect } from 'react'
import { API_options } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addUpcoming } from '../utils/movieSlice';

const useUpcoming = () => {
    const dispatch=useDispatch();
  const getUpcoming=async()=>{
const data= await fetch("https://api.themoviedb.org/3/movie/upcoming",API_options);
const json=await data.json();
dispatch(addUpcoming(json.result))
  }

  useEffect(()=>{
    getUpcoming()
  })
}

export default useUpcoming