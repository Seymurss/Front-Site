import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://back-site-2.onrender.com",
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); 
  console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; 
  }
  return config; 
}); 

export default axiosClient;
 