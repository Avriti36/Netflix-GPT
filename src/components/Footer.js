import React from 'react'

const Footer = () => {
   

  return (
    <footer className='w-full bg-black text-gray-300 border-t border-white/10 '>
      <div className='mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12'>
        <p className='text-sm'>API's used:  Tmdb, gemini-2.5-flash/pro.</p>
        <p className='text-sm'>mail: avritisharmamain@gmail.com</p>
        <a className='text-sky-400 hover:text-lg' href='https://www.linkedin.com/in/avriti-sharma'>
          LinkedIn
        </a>
        <div>
          <button className='rounded border border-gray-500 px-4 py-2 text-sm'>English</button>
        </div>
        <p className='text-xs text-gray-500'>NetflixGPT © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
