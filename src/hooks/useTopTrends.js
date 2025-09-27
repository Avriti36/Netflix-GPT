import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_options } from '../utils/constant';
import {addTopTrends} from'../utils/movieSlice'

const useTopTrends = () => {
    const dispatch=useDispatch();
    
    const getTopTrends=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/top_rated",API_options);
        const json=  await data.json();
        dispatch(addTopTrends(json.results))
    }

useEffect(()=>{
    getTopTrends()
},[])

}

export default useTopTrends