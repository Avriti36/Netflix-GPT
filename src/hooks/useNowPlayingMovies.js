import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
      const dispatch=useDispatch();
    
      const getnowPlayingmovies=async()=>{    //fetching the movies from API and putting in the movies store
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_options)
        const json=await data.json()
        console.log(json.results)
        dispatch(addNowPlayingMovies(json.results))
      }


  useEffect(()=>{
    getnowPlayingmovies();
  },[])

}
  export default useNowPlayingMovies