import React, { useEffect, useState } from 'react'
import { dummyAdminData, EmployeeData } from '../assets/DummyData/AdminDummyData'
import AdminDashbord from '../components/AdminDashbord'
import EmployeeDashbord from '../components/EmployeeDashbord'
import { useAuth } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

function Dashbord() {

  const [data,setData] = useState(null)
  // const [loading,setLoading] = useState(true)
 const navigate = useNavigate()
  const {user,refreshsession,token,loading} = useAuth()
 useEffect(()=>{
   setData("gjh")   
 },[])

//  console.log(data);
 
 if(loading) return <>Loading</>
 if(!token) return  <Navigate to="/login"/>
 if(!data) return <>Faild To Fetch The data</>
 if(user && user?.role == "Admin"){
  return <AdminDashbord/>
 }
 else{
  return <EmployeeDashbord/>
 }
}

export default Dashbord