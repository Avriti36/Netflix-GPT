import { useRef, useState } from 'react' 

import Button,{ API_options, BG_URL } from '../utils/constant';

import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/langaugeConstant'
import { getGeminiModel } from '../utils/openai';
import { addtmdbsearchMovie } from '../utils/GPTSearchSlice';

export const GPTSearchBar = () => {
  const dispatch=useDispatch();
const searchText=useRef(null)
const [errorMessage, setErrorMessage] = useState(null);
const [isLoading, setIsLoading] = useState(false);

const searchTmdb=async(movie)=>{
  try {
    const data =await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`, API_options)
    if (!data.ok) {
      console.error(`TMDB search failed for ${movie}:`, data.status);
      return [];
    }
    const json=await  data.json()
    return json.results || [];
  } catch (error) {
    console.error(`Error searching TMDB for ${movie}:`, error);
    return [];
  }
}

  const generateWithModel = async (modelName, prompt) => {
    const { model } = getGeminiModel(modelName);
    const result = await model.generateContent(prompt);
    return result.response;
  };

  const handleGptSearchClick = async () => {
    // Clear previous errors
    setErrorMessage(null);
    
    // Validate input
    if (!searchText.current?.value?.trim()) {
      setErrorMessage("Please enter a search query");
      return;
    }

    setIsLoading(true);
    
    try {
      const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current.value + ". Only give details for first 5 movies, comma separated like the example given ahead. Example Result: Don, Race, Inception just give result no xtra statement"

      const modelsToTry = ['flash', 'pro'];
      let response = null;
      let lastError = null;

      for (const candidate of modelsToTry) {
        try {
          response = await generateWithModel(candidate, gptQuery);
          break;
        } catch (error) {
          lastError = error;
          const message = error?.message || '';
          const isRateLimited = message.includes('429') || message.toLowerCase().includes('quota');
          if (!isRateLimited || candidate === modelsToTry[modelsToTry.length - 1]) {
            throw error;
          }
        }
      }

      if (!response) {
        throw lastError || new Error('Failed to get a response from Gemini');
      }
      console.log(response);

      const gptResult=response.candidates[0]?.content.parts[0]?.text?.split(",").map(movie => movie.trim()).filter(movie => movie.length > 0);
      console.log("GPT Result:", gptResult)

      if (!gptResult || gptResult.length === 0) {
        setErrorMessage("No movie recommendations found. Please try a different search.");
        setIsLoading(false);
        return;
      }

      const promisedata=gptResult.map((movie)=>searchTmdb(movie))    //since the fun is async it returns promise  array
      const tmdbResult= await Promise.all(promisedata)             //it  will wait until all the promise api gets resolved and then only show result
      console.log("TMDB Result:", tmdbResult)
      dispatch(addtmdbsearchMovie({movieNames:gptResult ,movieResults:tmdbResult}))
    } catch (error) {
      console.error("GPT Search Error:", error);
      
      // Handle different error types
      let errorMsg = "An error occurred while searching. Please try again.";
      
      if (error.message) {
        if (error.message.includes('503') || error.message.includes('overloaded')) {
          errorMsg = "The AI service is currently overloaded. Please try again in a few moments.";
        } else if (error.message.includes('429') || error.message.includes('quota')) {
          errorMsg = "API quota exceeded. Please try again later or check your API plan.";
        } else if (error.message.includes('401') || error.message.includes('Unauthorized')) {
          errorMsg = "Authentication failed. Please check your API key.";
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMsg = "Network error. Please check your internet connection and try again.";
        } else {
          errorMsg = error.message || errorMsg;
        }
      }
      
      setErrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
}

  

  const langKey=useSelector((store)=>store.config?.lang || 'en')

 
  return (
    <div>
      <form
        action=""
        className='h-10 justify-center pr-15 rounded-md p-[10%] flex flex-center gap-1'
        onSubmit={(e)=>e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className='h-10 w-[20rem] rounded-full p-8 mx-2 -my-1 mz-2'
          placeholder={(lang[langKey]||lang['en']).gptSearchPlaceholder}
          disabled={isLoading}
        />
        <Button onClick={handleGptSearchClick} disabled={isLoading}>
          {isLoading ? 'Searching...' : (lang[langKey]||lang['en']).search}
        </Button>
      </form>
      {errorMessage && (
        <div className='text-center mt-4'>
          <p className='text-red-500 font-bold text-sm bg-red-100 dark:bg-red-900/20 px-4 py-2 rounded-md inline-block'>
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  )


  
}
