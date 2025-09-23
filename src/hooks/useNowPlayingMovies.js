import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
      const dispatch=useDispatch();
    
      const getnowPlayingmovies=async()=>{    //fetching the movies from API and putting in the movies store
        try {
          const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_options);
          if (!response.ok) {
            const errJson = await response.json().catch(()=>({}));
            console.error("TMDB now_playing fetch failed:", response.status, errJson);
            dispatch(addNowPlayingMovies([]));
            return;
          }
          const json=await response.json();
          console.log("TMDB now_playing results:", json?.results);
          dispatch(addNowPlayingMovies(Array.isArray(json?.results) ? json.results : []))
        } catch (error) {
          console.error("TMDB now_playing network/error:", error);
          dispatch(addNowPlayingMovies([]));
        }
      }


  useEffect(()=>{
    getnowPlayingmovies();
  },[])

}
  export default useNowPlayingMovies