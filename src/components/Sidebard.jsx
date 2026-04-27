import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Sidebard() {
    const [userDetails, setUserDetails] = useState({
        username: "jhon",
        designation: "employee"
    })
    const sidebarDetails = [
        { title: "Dashbord", icon: <i class="fa-brands fa-dashcube"></i>, href: "/dashbord" },
        { title: "Attendence", icon: <i class="fa-solid fa-calendar-day"></i>, href: "/attendence" },
        { title: "Leave", icon: <i class="fa-regular fa-clipboard"></i>, href: "/leave" },
        { title: "Payslip", icon: <i class="fa-solid fa-dollar-sign"></i>, href: "/payslip" },
        { title: "Settings", icon:<i class="fa-solid fa-gear"></i>, href: "/settings" }




    ]
    const { pathname } = useLocation()

    return (
        <div className='bg-[rgba(15,23,43,1)] w-full h-screen text-white p-3 flex flex-col justify-between'>

            {/* TOP SECTION */}
            <div>

                {/* Header */}
                <div className='flex items-center justify-center py-4'>
                    <i className="fa-regular fa-user text-white text-2xl"></i>
                    <div className='mx-4'>
                        <h1 className='font-bold text-xl'>Employee MS</h1>
                        <p className='opacity-55 text-xs text-green-50'>Management System</p>
                    </div>
                </div>

                <hr className='border-white/10 my-3' />

                {/* User */}
                <div className='flex bg-[rgba(29,41,61,1)] items-center p-2 rounded-lg border border-white/10'>
                    <span className='border border-white/10 w-9 h-9 flex items-center justify-center font-bold rounded-md'>
                        {userDetails.username.charAt(0).toUpperCase()}
                    </span>

                    <div className='mx-4'>
                        <h1 className='font-semibold text-sm'>{userDetails.username}</h1>
                        <p className='opacity-55 text-xs text-green-50'>{userDetails.designation}</p>
                    </div>
                </div>

                {/* Navigation */}
                <p className='opacity-55 text-xs my-5 tracking-widest text-green-50'>
                    NAVIGATION
                </p>

                {sidebarDetails.map((items, index) => (
                    <NavLink
                        key={index}
                        to={items.href}
                        className={({ isActive }) =>
                            `flex items-center p-3 rounded-xl border-l-4 transition-all ${isActive
                                ? "bg-white/10 border-blue-500 text-white"
                                : "border-transparent text-gray-400 hover:bg-white/5"
                            }`
                        }
                    >
                        <span className='mr-2'>{items.icon}</span>
                        <p className='font-semibold'>{items.title}</p>
                    </NavLink>
                ))}

            </div>

            {/* BOTTOM SECTION (Logout) */}
            <div>
                <hr className='border-white/10 my-3' />


                <button className='w-full flex items-center justify-center gap-2 px-4 py-2 hover:bg-red-500/10 hover:text-red-400 rounded-md transition'>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span className='tracking-widest'>  Logout</span>
                </button>
            </div>

        </div>
    )
}

export default Sidebard