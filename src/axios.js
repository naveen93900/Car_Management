import axios from 'axios';

// Set up axios instance for the API calls
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend API URL
});

export default axiosInstance;
