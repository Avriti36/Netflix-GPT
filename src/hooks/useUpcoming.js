import  { useEffect } from 'react'
import { API_options } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcoming } from '../utils/movieSlice';

const useUpcoming = () => {
    const dispatch=useDispatch();
const Upcoming=useSelector((store)=>store.movies.Upcoming)


  const getUpcoming=async()=>{
const data= await fetch("https://api.themoviedb.org/3/movie/upcoming",API_options);
const json=await data.json();
dispatch(addUpcoming(json.results))
  }

  useEffect(()=>{
  !Upcoming?.length &&  getUpcoming()
  },[])
}

export default useUpcoming