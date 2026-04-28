import React from 'react'
import Sidebard from '../components/Sidebard'
import { Outlet } from 'react-router-dom'

function Layout() {
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