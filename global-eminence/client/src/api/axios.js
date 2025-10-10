import axios from 'axios';

const getBaseURL = () => {
  if (window.location.hostname === 'www.eminenceadvice.com' || window.location.hostname === 'eminenceadvice.com') {
    return 'https://eminence-advice.onrender.com';
  }
  return process.env.REACT_APP_API_URL || 'http://localhost:5000';
};

const api = axios.create({
  baseURL: getBaseURL(),
  timeout: 30000
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('adminToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(res => res, err => {
  if (err.response?.status === 401) {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
    window.location.href = '/admin/login';
  }
  return Promise.reject(err);
});

export default api;
