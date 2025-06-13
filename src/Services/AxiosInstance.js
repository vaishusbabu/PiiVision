import axios from 'axios';
import Cookies from 'js-cookie';


    const axiosInstance = axios.create({
      baseURL: 'https://localhost:7122/api',
      withCredentials: true, 
    });

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
