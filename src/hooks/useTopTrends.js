import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_options } from '../utils/constant';
import {addTopTrends} from'../utils/movieSlice'

const useTopTrends = () => {
    const dispatch=useDispatch();
    const TopTrends=useSelector((store)=>store.movies.TopTrends)


    const getTopTrends=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/top_rated",API_options);
        const json=  await data.json();
        dispatch(addTopTrends(json.results))
    }

useEffect(()=>{
   !TopTrends?.length &&  getTopTrends()
},[])

}

export default useTopTrends