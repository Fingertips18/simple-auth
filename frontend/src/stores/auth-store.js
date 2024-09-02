import { create } from "zustand";
import axios from "axios";

import { AppRoutes } from "../constants/routes";

const baseUrl = `${import.meta.env.VITE_BASE_URL}/api/auth`;

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  success: null,
  error: null,
  loading: false,
  verified: false,
  signUp: async (username, email, password) => {
    set({ loading: true, success: null, error: null });
    try {
      const response = await axios.post(`${baseUrl}${AppRoutes.signUp}`, {
        username,
        email,
        password,
      });
      set({
        user: response.data.user,
        success:
          response.data.message ||
          "Congratulations! You have signed up successfully",
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
  verifyEmail: async (code) => {
    set({ loading: true, success: null, error: null });
    try {
      const response = await axios.post(`${baseUrl}${AppRoutes.verifyEmail}`, {
        token: code,
      });
      set({
        user: response.data.user,
        success:
          response.data.message ||
          "Congratulations! Your email has been verified",
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error verifying email",
        isAuthenticated: false,
      });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  verifyToken: async () => {
    set({ loading: true, verified: false, success: null, error: null });
    try {
      const response = await axios.get(`${baseUrl}${AppRoutes.verifyToken}`);
      set({
        user: response.data.user,
        verified: true,
        isAuthenticated: true,
      });
    } catch {
      set({
        verified: false,
        isAuthenticated: false,
      });
    } finally {
      set({ loading: false });
    }
  },
}));
