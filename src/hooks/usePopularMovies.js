import { useEffect } from 'react'
import {API_options} from '../utils/constant'
import { useDispatch } from 'react-redux'
import {addPopularMovies} from '../utils/movieSlice'

const usePopularMovies = () => {
    const dispatch= useDispatch()
     const getPopularMovies=async ()=>{
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_options)
      if (!response.ok) {
        const errJson = await response.json().catch(()=>({}))
        console.error("TMDB popular fetch failed:", response.status, errJson)
        dispatch(addPopularMovies([]))
        return
      }
      const json = await response.json()
      console.log("TMDB popular results:", json?.results)
      dispatch(addPopularMovies(Array.isArray(json?.results) ? json.results : []))
    } catch (error) {
      console.error("TMDB popular network/error:", error)
      dispatch(addPopularMovies([]))
    }
  }
  useEffect(()=>{
    getPopularMovies();
  },[])
}

export default usePopularMovies