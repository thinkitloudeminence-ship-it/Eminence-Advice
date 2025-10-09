// client/src/api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
});

// add token automatically for admin routes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken"); // make sure token is saved
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
