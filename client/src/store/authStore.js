import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../services/api';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: async (email, password) => {
        const response = await api.post('/auth/login', { email, password });
        if (response.data.success) {
          const { user, token } = response.data.data;
          set({ user, token, isAuthenticated: true });
          return user;
        }
      },

      register: async (name, email, password) => {
        const response = await api.post('/auth/register', { name, email, password });
        if (response.data.success) {
          const { user, token } = response.data.data;
          set({ user, token, isAuthenticated: true });
          return user;
        }
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, token: state.token, isAuthenticated: state.isAuthenticated }),
    }
  )
);
