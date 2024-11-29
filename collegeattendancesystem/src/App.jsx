import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginForm } from './LoginForm'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { REgistrationForm } from './REgistrationForm'
import {StudentsScores} from './StudentsScores'
import { lessonplan } from './lessonplan'
import { Homepage } from './Homepage'
import { ProfessorRegistration } from './ProfessorRegistration'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function App() {
  const sikshakSarthakRouter=createBrowserRouter(
    [
      {
        path:"/",
        element:<><Homepage/><LoginForm/></>
      },
      {
        path:"/student-registration",
        element:<><Homepage/><REgistrationForm/></>
      },
      {
        path:"/professor-registration",
        element:<><Homepage/><ProfessorRegistration/></>
      },
      {
        path:"/student-scores",
        element:<><Homepage/><StudentsScores/></>
      }
    ]
  )
  
    
  return (

   <>
   <main>
    <RouterProvider router={sikshakSarthakRouter}/>
  </main>
    </>
  )
}

export default App
