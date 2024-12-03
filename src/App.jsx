import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/Components/Home'
import About from './assets/Components/About'
import Contact from './assets/Components/Contact'
import Navbar from './assets/Components/Navbar'
import Params from './assets/Components/Params'
import Task from './assets/Components/Task';
import Taskone from './assets/Components/Taskone';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>
    },{
      path: '/about',
      element: <div>
      <Navbar />
      <About />
    </div>
    },{
      path: '/contact',
      element: <div>
      <Navbar />
      <Contact />
    </div>,
    children : [
      {
        path: 'task',
        element: <div>
          <Task />
        </div>
      },{
        path: 'taskone',
        element: <div>
          <Taskone />
        </div>
      }
    ]
    },
    {
    path: '/params/:id',
    element: <div>
    <Navbar />
    <Params />
  </div>
  }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App