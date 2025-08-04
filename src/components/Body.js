import React from 'react'
import Login from './login'
import Browse from './browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
const Body = () => {


    const approuter=createBrowserRouter(
        [ 
            {
                path:"/login",
                element:<Login/>     },
                {
                path:"/browse",
                element:<Browse/>     },

        ]
    )
  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body