
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function SecondaryContainer() {
  const movies=useSelector(store=>store.movies)
  return (
    <div className=' bg-neutral-900 '>
      <div className=' pt-0.5  md:pt-[15rem] pl-4' >
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
       <MovieList title={"Popular"} movies={movies.PopularMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
         <MovieList title={"Top Trends"} movies={movies.TopTrends} /></div>

    </div>
  )
}

export default SecondaryContainer