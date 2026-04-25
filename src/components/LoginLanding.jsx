import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginMain from './LoginMain'




function LoginLanding() {
    const navigate = useNavigate()

    return (
        <>
            <div className='flex h-screen '>
                {/* left  */}
                <div className="bg-[rgb(30,26,77)] w-1/2 flex items-start flex-col justify-center p-20 ">
                    <h1 className='text-5xl leading-[55px] text-white'>Employee<br /> Management System</h1>
                    <p className='mt-3 text-sm font-light leading-[26px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officia beatae possimus veritatis adipisci fuga nostrum suscipit reprehenderit? Exercitationem quia totam porro, sapiente veniam libero ut neque sunt voluptatem amet!</p>
                </div>

                {/* right */}

               <div className="bg-white w-1/2 flex flex-col justify-center items-start ml-25 px-10">

                    <h1 className="text-black text-2xl font-bold">
                        Welcome Back
                    </h1>

                    <p className="font-extralight text-xs my-2 max-w-sm">
                        Select Your Portal To Securely Access The System
                    </p>

                    <button onClick={()=>{navigate('/admin-portal')}} className="py-5 mt-3 px-5 flex justify-between items-center bg-[rgba(248,250,252,1)] text-black border border-[rgba(226,232,240,1)] mb-2 w-full max-w-sm hover:bg-gray-100 transition-all duration-200 rounded-xl font-semibold">
                        <p>Admin Portal</p>
                        <span><i class="fa-solid fa-angle-right"></i></span>
                    </button>

                    <button onClick={()=>navigate('/employee-portal')} className="py-5 mt-3 px-5 flex justify-between items-center bg-[rgba(248,250,252,1)] text-black border border-[rgba(226,232,240,1)] mb-2 w-full max-w-sm hover:bg-gray-100 transition-all duration-200 rounded-xl font-semibold">
                        <p>Employee Portal</p>
                        <span><i class="fa-solid fa-angle-right"></i></span>
                    </button>
                      <p className="font-extralight opacity-35 text-xs my-2 max-w-sm">
                            all Right Reserver @hareeshvs
                    </p>
                </div>
                  
            </div>
        </>
    )
}

export default LoginLanding