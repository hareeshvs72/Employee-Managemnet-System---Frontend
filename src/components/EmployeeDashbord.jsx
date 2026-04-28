import React from 'react'
import { Link } from 'react-router-dom'

function EmployeeDashbord() {
    const cards = [
        {
            title: "Days Present",
            count: "20",
            icons: <i className="fa-regular fa-calendar"></i>
        },
        {
            title: "Pending Leaves",
            count: "1",
            icons: <i className="fa-regular fa-clipboard"></i>
        },
        {
            title: "Latest Payslip",
            count: "$10",
            icons: <i className="fa-solid fa-dollar-sign"></i> // ✅ fixed
        },
    ]

    return (
        <div className='flex flex-col gap-6'>

            {/* Header */}
            <div className='ml-5'>
                <h1 className='text-black font-bold text-2xl'>Dashboard</h1>
                <p className='text-sm mt-3 text-black/40'>
                    Welcome Back - Here Your Overview
                </p>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5'>
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center justify-between border-l-4 border-[rgba(98,116,142,0.7)] rounded-lg p-5 transition-all hover:-translate-y-1 hover:text-blue-400 hover:border-blue-400 shadow-sm hover:shadow-md'
                    >
                        <div>
                            <p className='text-black font-semibold'>{item.title}</p>
                            <h3 className='font-bold text-black text-2xl mt-2'>
                                {item.count}
                            </h3>
                        </div>

                        <span className='text-3xl p-3 rounded-2xl bg-[rgba(98,116,142,0.1)]'>
                            {item.icons}
                        </span>
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-5 w-1/2 px-5">

                {/* Mark Attendance */}
                <Link
                    to="/attendance"
                    className="flex-1 flex items-center justify-between p-4 rounded-lg transition 
                              
                              bg-[linear-gradient(to_right,rgba(79,57,246,0.6),rgba(79,57,246,1))] 
           hover:bg-[linear-gradient(to_right,rgba(79,57,246,1),rgba(79,57,246,1))] hover:text-white"
                >
                    <p>Mark Attendance</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>

                {/* Apply Leave */}
                <Link
                    to="/leave"
                    className="flex-1 flex items-center justify-between p-4 border-[rgba(98,116,142,0.7)] rounded-lg border transition 
                               hover:bg-gray-100"
                >
                    <p>Apply For Leave</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>

            </div>
        </div>
    )
}

export default EmployeeDashbord