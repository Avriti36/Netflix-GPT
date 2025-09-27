 import React from 'react'

 import MovieCard from './MovieCard'
 
 const MovieList = ({title,movies}) => {
     
     if (!movies || movies.length === 0) {
    return null;  
  }
   return (
     <div className='pl-8 pt-6 pb-[15rem] relative z-20 -mt-[15rem]' > 
   
            <h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200'>{title} </h1>
                <div className='flex  gap-4 flex-nowrap overflow-y-auto no-scrollbar ' >
                  {  movies.map((movie=>(  <MovieCard key={movie.id} posterPath={movie?.poster_path}/>)))
                  }
                    </div>
           
      
      
        </div>
   )
 }
 
 export default MovieList
  