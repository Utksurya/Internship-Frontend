// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://internship-backend-zbdg.onrender.com',
});

export default API;
