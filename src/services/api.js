import axios from 'axios';

const api = axios.create({
  baseURL: '/api/',
  // [[redirects]]
  // from = "/vota/*"
  // to = "https://acad.unoesc.edu.br/:splat"
  // status = 200
  // force = true
  // headers = {X-From = "Netlify"}
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
