 
import Header from './header' 
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopTrends from '../hooks/useTopTrends'
import useUpcoming from '../hooks/useUpcoming'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'
import Footer from './Footer'

  
const Browse = () => {

  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
useNowPlayingMovies()
usePopularMovies()
useTopTrends()
useUpcoming()


  return (
    <div>
      <Header/>
       {showGptSearch?( <GPTSearch/>): (<> <MainContainer/>
      <SecondaryContainer/></>)}
      <Footer/> 
      
      

    </div>
  )
}

export default Browse