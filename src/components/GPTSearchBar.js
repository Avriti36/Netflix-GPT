import React from 'react'
 
import { BG_URL } from '../utils/constant';
import Button from '../utils/constant';
import { useSelector } from 'react-redux';
import lang from '../utils/langaugeConstant'
export const GPTSearchBar = () => {

  const langKey=useSelector((store)=>store.config?.lang || 'en')
  return (
    <div >  
        <div className='absolute -z-10'>
       <img src={BG_URL} alt="bg" />

    </div>
<form action=""  className=' h-10 justify-center pr-24 rounded-md    p-[10%] flex flex-center gap-1' >
   <input type="text "   className='h-10 w-[20rem] rounded-full p-8 mx-2 -my-1 mz-2' placeholder={(lang[langKey]||lang['en']).gptSearchPlaceholder} />
    <Button  >
        {(lang[langKey]||lang['en']).search}
    </Button>
</form>

    </div>
  )


  
}
