import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
 

const MovieCard = ({posterPath}) => {
   
  return (
    <div className='w-48  flex-shrink-0 no-scrollbar overflow-x-auto' > 
    <div className="flex flex-nowrap gap-4">
        <img alt="Movie Card"  src={IMG_CDN_URL+posterPath} className='object-cover transition-transform duration-200 hover:scale-105'/> 
</div>
    </div>
  )
}

export default MovieCard