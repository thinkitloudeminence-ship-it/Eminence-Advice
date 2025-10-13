// client/src/utils/environment.js
export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';

export const getApiUrl = () => {
  return process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
};

export const getBaseUrl = () => {
  return process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:5000';
};