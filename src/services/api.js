import axios from 'axios';

const api = axios.create({
  baseURL: 'https://destaque2019.acismo.com.br/vota/',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
