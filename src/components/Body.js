import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login></Login>
        },
        {
            path:"/browse",
            element:<Browse></Browse>
        },
        {
            path:"/signin",
            element:<Login></Login>
        },
    ])

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default Body
