import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();

    const trailerVideo=useSelector((store)=>store.movies.trailerVideo)

    const  GetMovieVideos=async()=>{
        const data =  await fetch("https://api.themoviedb.org/3/movie/" +movieId+ "/videos?language=en-US",API_options)
const json=await data.json();
 
const filterData=json.results.filter((video)=>video.type==="Trailer")
const trailer=filterData?filterData[0]:json.results[0]              //is trailer not found then take the first video of movie
 
dispatch(addTrailerVideo(trailer))                                //adding trailer to our movie redux store 
};
useEffect(()=>{
 (!trailerVideo || (Array.isArray(trailerVideo) && trailerVideo.length === 0)) && movieId && GetMovieVideos();   //memoisation
},[movieId])
}


export default useMovieTrailer;