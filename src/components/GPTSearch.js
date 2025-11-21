import React from 'react'
import { GPTSearchBar } from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GPTSearch = () => {
  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-start gap-8 px-4 py-16 md:px-0'>
      <div className='fixed inset-0 -z-10'>
        <img className='h-full w-full object-cover' src={BG_URL} alt="bg" />
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent' />
      </div>
      <div className='w-full max-w-3xl space-y-8'>
        <div className='pt-20 m-4 pb-3 z-5'>
          <GPTSearchBar />
        </div>
        <GPTMovieSuggestion />
      </div>
    </div>
  )
}

export default GPTSearch