import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
 

const MovieCard = ({posterPath}) => {
   if(!posterPath) return null;
  return (
    <div className=' w-36 md:w-48  flex-shrink-0 no-scrollbar overflow-x-auto' > 
    <div className=" gap-0 md: flex flex-nowrap md:gap-4">
        <img alt="Movie Card"  src={IMG_CDN_URL+posterPath} className='object-cover transition-transform duration-200 hover:scale-105'/> 
</div>
    </div>
  )
}

export default MovieCard