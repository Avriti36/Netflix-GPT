import React from 'react'
import { useSelector } from 'react-redux'
import genAI from 'openai'
import MovieList from './MovieList';

const GPTMovieSuggestion = () => {

const gptData = useSelector((store)=>store.gpt);
const movieNames = gptData?.movieNames;
const movieResults = gptData?.movieResults;
    
    if(!movieNames || !movieResults) return null;
    
    console.log("GPT Movie Suggestion - movieNames:", movieNames);
    console.log("GPT Movie Suggestion - movieResults:", movieResults);


  return (
    <div className='p-4 m-4  bg-black text-white  '> 
    <div className=' md:pt-[14rem]'>
      {movieNames.map((movieName,index)=> (
        <MovieList 
          key={movieName + index} 
          title={movieName?.trim()} 
          movies={movieResults?.[index]}
        />
      ))}
    </div>
 </div>
  )
}

export default GPTMovieSuggestion