import { useEffect } from 'react'
import {API_options} from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import {addPopularMovies} from '../utils/movieSlice'

const usePopularMovies = () => {
    const dispatch= useDispatch()

    const PopularMovies=useSelector((store)=>store.movies.PopularMovies)

     const getPopularMovies=async ()=>{
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_options)
      if (!response.ok) {
        const errJson = await response.json().catch(()=>({}))
        
        dispatch(addPopularMovies([]))
        return
      }
      const json = await response.json()
      
      dispatch(addPopularMovies(Array.isArray(json?.results) ? json.results : []))
    } catch (error) {
       
      dispatch(addPopularMovies([]))
    }
  }
  useEffect(()=>{
   !PopularMovies?.length &&  getPopularMovies();
  },[])
}

export default usePopularMovies