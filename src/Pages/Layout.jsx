import React from 'react'
import Sidebard from '../components/Sidebard'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Layout() {
  const {user,loading ,token} =useAuth()
  const navigate = useNavigate()
  if(loading) return <p>Loading</p>
  if(!token) return <Navigate to="/login"/>
  return (
    <div className='flex'>
      
      {/* Sidebar */}
      <div className='w-64 fixed '>
        <Sidebard />
      </div>

      {/* Main Content */}
      <div className='flex-1 ml-64 p-6 overflow-y-auto'>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout