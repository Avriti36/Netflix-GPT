import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div  className='pt-36 px-12 absolute text-white aspect-video bg-gradient-to-r from-black pt-[20%]'> 
        <h1 className='text-6xl font-bold'>{String(title)}</h1>
        <p className='p-4 pl-2 text-lg w-1/3'>{String(overview)}</p>
            <div className='px-2'>
                 
                 <button style={{boxShadow: 'inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)'}} className=" rounded-lg text-slate-500 text-xl inline-flex cursor-pointer items-center gap-1 border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100">
      Play
    </button>
     <button style={{boxShadow: 'inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)'} } className=" bg-grey-500 rounded-lg ml-4 text-slate-500 text-xl inline-flex cursor-pointer items-center gap-1   border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-900">
      More Info
    </button>
            </div>
    </div>
  )
}

export default VideoTitle