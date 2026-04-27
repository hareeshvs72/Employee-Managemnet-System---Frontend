import React, { useEffect, useState } from 'react'
import { dummyAdminData, EmployeeData } from '../assets/DummyData/AdminDummyData'
import AdminDashbord from '../components/AdminDashbord'
import EmployeeDashbord from '../components/EmployeeDashbord'

function Dashbord() {

  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(true)
 useEffect(()=>{
   setData(EmployeeData)
 },[])

 console.log(data);
 
 if(!loading) return <>Loading</>
 if(!data) return <>Faild To Fetch The data</>
 if(data?.role == "Admin"){
  return <AdminDashbord/>
 }
 else{
  return <EmployeeDashbord/>
 }
}

export default Dashbord