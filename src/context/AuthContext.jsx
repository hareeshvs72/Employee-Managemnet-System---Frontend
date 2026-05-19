import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import api from '../services/axios'
import { useEffect } from 'react'
const AuthProvider = createContext(null)
function AuthContext({children}) {
   
    const [user,setUser] = useState(null)
    const [token ,setToken ]= useState (localStorage.getItem("token"))
    const [loading ,setLoading ]= useState (true)


     const refreshsession = async () => {
        const storedToken = localStorage.getItem("token")
        console.log(storedToken);
        
        if(!storedToken){
            console.log("no stored token" ,storedToken);
            
            setUser(null)
            setToken(null)
            setLoading(false)
            return
        }
         setToken(storedToken)
        try {
            const {data} =  await api.get("/auth/session")
            console.log(data);
            
            setUser(data.user)
        } catch (error) {
            localStorage.removeItem("token")
             setUser(null)
            setToken(null)
        }finally{
                        setLoading(false)

        }
     }

     useEffect(()=>{
          refreshsession()
     },[])

  const login = async (userLogin) => {
    const { email,password,role} =userLogin
    const {data} = await api.post("/auth/login",{email,password,role})
    console.log("login data " ,data);
    
    const store  = localStorage.setItem("token", data?.token)
    setToken(data.token)
    setUser(data.user)
    return
  }
const logOut = async () => {
                localStorage.removeItem("token")
                setUser(null)
                setToken(null)

}
  const  value = {user,token,loading,login,logOut,refreshsession}
  return (
 
  <AuthProvider.Provider value={value}>
    {children}
  </AuthProvider.Provider>
)
}

export function useAuth(){
    const ctx = useContext(AuthProvider)
    if(!ctx){
        throw new Error("use auth must be used with in auth provider")
    }
    return ctx
}

export default AuthContext