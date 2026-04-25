import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import LoginLanding from './components/LoginLanding'
import LoginMain from './components/LoginMain'

function App() {

  return (
   <>
    <Routes>
       <Route path='/' element={<LoginLanding/>}/>
             <Route path='/admin-portal' element={<LoginMain/>}/>
             <Route path='/employee-portal' element={<LoginMain/>}/>

    </Routes>
   </>
  )
}

export default App
