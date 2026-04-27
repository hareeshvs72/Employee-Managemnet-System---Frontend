import React from 'react'

function AdminDashbord() {
    const cards = [
        {
            title: "Total Employees",
            count: "3",
            icons: <i className="fa-solid fa-user-group"></i>
        },
        {
            title: "Departments",
            count: "10",
            icons: <i className="fa-solid fa-building"></i>
        },
        {
            title: "Total Attendance",
            count: "1",
            icons: <i className="fa-regular fa-calendar"></i>
        },
        {
            title: "Pending Leaves",
            count: "1",
            icons: <i className="fa-regular fa-clipboard"></i>
        },
    ]

    return (
        <>
            <div className='ml-5'>
                <h1 className='text-black font-bold text-2xl'>Dashboard</h1>
                <p className='text-sm mt-3 text-black/40'>
                    Welcome Back Admin - Here Your Overview
                </p>
            </div>

            <div className='grid grid-cols-4 gap-5 my-5 px-5'>
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center justify-between border-l-4 border-[rgba(98,116,142,0.7)] rounded-l-sm p-5 hover:-translate-y-1 transition-all hover:text-blue-400 hover:border-blue-400 shadow-sm hover:shadow-md'
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
        </>
    )
}

export default AdminDashbord