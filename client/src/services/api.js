import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api', // Adjusted to match server routing /api/auth
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor to add the auth token header to requests
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 1. Extract status if available
    const status = error.response ? error.response.status : null;

    // 2. Handle unauthorized
    if (status === 401) {
      useAuthStore.getState().logout();
      window.location.href = '/login';
    }

    // 3. Normalize the error object for safe consumption in components
    const customError = new Error(error.message);
    customError.status = status;
    customError.data = error.response?.data || null;

    // Build a user-friendly message based on the type of failure
    if (!error.response) {
      // Network error, timeout, or CORS failure (no response from server)
      customError.message = 'Network error. Please check your connection and try again.';
    } else if (status >= 500) {
      // Server error
      customError.message = 'An unexpected server error occurred. Please try again later.';
    } else {
      // Client error (4xx) - prefer backend message
      customError.message = error.response?.data?.message || error.message || 'An error occurred';
    }

    // Include detailed validation errors if the backend provides them
    customError.details = error.response?.data?.errors;

    return Promise.reject(customError);
  }
);

export default api;
