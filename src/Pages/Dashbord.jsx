import React, { useEffect, useState } from 'react'
import AdminDashbord from '../components/AdminDashbord'
import EmployeeDashbord from '../components/EmployeeDashbord'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import api from '../services/axios'
import Loading from '../components/Loading'

function Dashbord() {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
const [loading ,setLoading] = useState(false)
  const { user, token } = useAuth()

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true)
        const res = await api.get("/dashboard")
          console.log(res.data.data);
          
        setData(res.data.data)

      } catch (err) {
        setLoading(false)
        console.error("Dashboard fetch error:", err)
        setError("Failed to fetch dashboard")
      }finally{
        setLoading(false)
      }
    }

    if (token) {
      fetchDashboard()
    }
  }, [token])

  // ================= UI STATES =================

  if (loading) return <Loading/>

  if (!token) return <Navigate to="/login" />

  if (error) return <>{error}</>

  if (!data) return <>Loading dashboard...</>

  // ================= ROLE BASED RENDER =================

  if (user.role === "Admin") {
    return <AdminDashbord data={data} />
  } else {
    return <EmployeeDashbord data={data} />
  }
}

export default Dashbord