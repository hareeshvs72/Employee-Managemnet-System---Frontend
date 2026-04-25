import React from 'react'
import Sidebard from '../components/Sidebard'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex'>
      
      {/* Sidebar */}
      <div className='w-64 overflow-y-hidden'>
        <Sidebard />
      </div>

      {/* Main Content */}
      <div className='flex-1 p-4'>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout