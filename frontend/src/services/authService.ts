import axios from 'axios';
import { User, LoginResponse } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

// Create axios instance with credentials
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const authService = {
  getCurrentUser: async (): Promise<User> => {
    const response = await api.get('/api/auth/profile');
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post('/api/auth/logout');
  },

  verifyEmail: async (token: string): Promise<string> => {
    const response = await api.post(`/api/auth/verify-email?token=${token}`);
    return response.data;
  },

  updateProfile: async (userData: Partial<User>): Promise<User> => {
    const response = await api.put('/api/auth/profile', userData);
    return response.data;
  },
}; 