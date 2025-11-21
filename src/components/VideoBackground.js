 
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { BG_URL } from '../utils/constant'
 

const VideoBackground=({movieId})=> {    //updating the store with trailer video
    const trailerVideo=useSelector(stores=>stores.movies?.trailerVideo)
useMovieTrailer(movieId)
  return (
    <div className='absolute inset-0 -z-10'>
        {trailerVideo?.key ? (
          <div className='w-full h-full'>
            <iframe 
              className='w-full h-full object-cover' 
              src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist="+trailerVideo?.key}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img className='h-full w-full object-cover' src={BG_URL} alt="background" />
        )}
    </div>
  )
}


export default VideoBackground