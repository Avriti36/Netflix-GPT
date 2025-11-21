import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute  inset-0 z-10 flex flex-col gap-4 px-12 py-16 text-white bg-gradient-to-r from-black/80 via-black/40 to-transparent'>
      <h1 className='text-left text-4xl  pt-[24rem] md:text-6xl  font-bold'>{String(title)}</h1>
       
      <p className=' max-w-xl text-base md:text-lg'>{String(overview)}</p>
      <div className='flex gap-4 pt-2'>
        <button
          style={{boxShadow: 'inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)'}}
          className="rounded-lg text-slate-500 text-xl inline-flex cursor-pointer items-center gap-1 border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100">
          Play
        </button>
        <button
          style={{boxShadow: 'inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)'}}
          className="rounded-lg text-slate-500 text-xl inline-flex cursor-pointer items-center gap-1 border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-900">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle