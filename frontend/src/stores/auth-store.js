import { create } from "zustand";

import axios from "axios";

const baseUrl = `${import.meta.env.VITE_BASE_URL}/api/auth`;

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  loading: false,
  isCheckingAuth: true,
  signUp: async (username, email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`${baseUrl}/sign-up`, {
        username,
        email,
        password,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing up",
        isAuthenticated: false,
      });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));
