import axios from 'axios'

const api = axios.create({
        baseURL:"https://ems-backend-ej65.onrender.com" + "/api"
    // baseURL: "http://localhost:4000" + "/api"

    // baseURL:(import.meta.env.VITE_BASE_URL  || "http://localhost:4000") + "/api"
})
    // console.log(import.meta.env.VITE_BASE_URL);

// attach token to all  api 

api.interceptors.request.use((config)=>{
 const token = localStorage.getItem("token")
 if(token){
    config.headers.Authorization = `Bearer ${token}`
 }
 return config

})

export default api
