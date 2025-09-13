 
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
 

const VideoBackground=({movieId})=> {    //updating the store with trailer video
    const trailerVideo=useSelector(stores=>stores.movies?.trailerVideo)
useMovieTrailer(movieId)
  return (
    <div>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
         frameborder="0"></iframe>
    </div>
  )
}


export default VideoBackground