import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import LoginLanding from './components/LoginLanding'
import LoginMain from './components/LoginMain'
import Layout from './Pages/Layout'
import Dashbord from './Pages/Dashbord'
import Attendence from './Pages/Attendence'
import Leave from './Pages/Leave'
import Payslip from './Pages/Payslip'
import Settings from './Pages/Settings'
import Employee from './Pages/Employee'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginLanding />} />
        <Route path='/admin-portal' element={<LoginMain />} />
        <Route path='/employee-portal' element={<LoginMain />} />
        <Route element={<Layout />}>
          <Route path='/dashbord' element={<Dashbord />} />
          <Route path='/attendence' element={<Attendence />} />

          <Route path='/leave' element={<Leave />} />

          <Route path='/payslip' element={<Payslip />} />

          <Route path='/settings' element={<Settings />} />
                   <Route path='/employee' element={<Employee />} />



        </Route>

      </Routes>
    </>
  )
}

export default App
