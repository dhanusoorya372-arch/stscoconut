import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sts_admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchProducts = () => api.get('/products');
export const fetchProductById = (id) => api.get(`/products/${id}`);
export const createProduct = (data) => api.post('/products', data);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

export const submitInquiry = (data) => api.post('/inquiries', data);
export const fetchInquiries = () => api.get('/inquiries');
export const updateInquiryStatus = (id, status) => api.put(`/inquiries/${id}`, { status });
export const deleteInquiry = (id) => api.delete(`/inquiries/${id}`);

export const submitContactMessage = (data) => api.post('/contact', data);

export const loginAdmin = (credentials) => api.post('/auth/login', credentials);

export default api;
