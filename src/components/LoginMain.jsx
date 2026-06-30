import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast'

function LoginMain() {

    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    // console.log(location.pathname);
    const role = location.pathname.slice(1)
    console.log(role);

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
        role: role

    })

    useEffect(() => {
    if (role === "admin") {
        setUserLogin({
            email: "admin@example.com",
            password: "admin123",
            role: "admin",
        });
    } else {
        setUserLogin({
            email: "hareesh@gmail.com",
            password: "hareesh123",
            role: "employee",
        });
    }
}, [role]);
    console.log(userLogin);
    const handileSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        try {
            const result = await login(userLogin)
            console.log(result);

            navigate('/')
        } catch (error) {
            setLoading(false)
            console.log(error);
            console.log(error.response.data.error);
            toast.error(error?.response?.data?.error)

        } finally {
            setLoading(false)

        }
    }
    return (
        <div className='flex h-screen '>
            {/* left side  */}
            <div className="bg-[rgb(30,26,77)] w-1/2 flex items-start flex-col justify-center p-20 ">
                <h1 className='text-5xl leading-[55px] text-white'>Employee<br /> Management System</h1>
                <p className='mt-3 text-sm font-light leading-[26px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officia beatae possimus veritatis adipisci fuga nostrum suscipit reprehenderit? Exercitationem quia totam porro, sapiente veniam libero ut neque sunt voluptatem amet!</p>
            </div>
            <div className="bg-white w-1/2 flex flex-col justify-center items-start ml-25 px-10">
                <p className="font-extralight opacity-45 text-xs my-2  mb-5 ">
                    <i className="fa-solid fa-arrow-left " onClick={() => navigate('/')}></i><span className='ml-8'> Back To Portal</span>
                </p>
                <h1 className="text-black text-2xl font-bold">
                    {location.pathname == "/employee" ? "Employee Portal" : "Admin Portal"}
                </h1>

                <p className="font-extralight text-sm my-2 max-w-sm">
                    Sign In To Access Your Account
                </p>

                <form onSubmit={handileSubmit}>
                    <label htmlFor="email" className='font-semibold mt-3'> Email Address</label>
                    <input
                        onChange={(e) => { setUserLogin({ ...userLogin, email: e.target.value }) }} value={userLogin.email}
                        id='email'
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border mt-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label htmlFor="password" className='font-semibold mt-3'> Password</label>
                    <input onChange={(e) => { setUserLogin({ ...userLogin, password: e.target.value }) }} value={userLogin.password} id='password'
                        type="password"
                        placeholder="******"
                        className="w-full px-4 py-3 border mt-2  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button type='submit' className="w-full mt-3 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                        {loading ? (
                            <>
                                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                               
                            </>
                        ) : (
                            "Sign In"
                        )}
                    </button>

                </form>
            </div>
        </div>
    )
}

export default LoginMain