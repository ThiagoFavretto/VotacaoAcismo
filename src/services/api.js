import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.102:3333',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
