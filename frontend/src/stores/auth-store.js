import { create } from "zustand";
import axios from "axios";

import { AppRoutes } from "../constants/routes";

const baseUrl =
  import.meta.env.MODE === "development"
    ? `${import.meta.env.VITE_BASE_URL}/api/auth`
    : "/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  success: null,
  error: null,
  loading: false,
  isVerifying: true,
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
        success: response.data.message || "Congratulations! You have signed up",
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
  signIn: async (email, password) => {
    set({ loading: true, success: null, error: null });
    try {
      const response = await axios.post(`${baseUrl}${AppRoutes.signIn}`, {
        email,
        password,
      });
      set({
        user: response.data.user,
        success: response.data.message || "Congratulations! You have signed in",
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing in",
        isAuthenticated: false,
      });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  signOut: async () => {
    set({ loading: true, success: null, error: null });

    try {
      const response = await axios.post(`${baseUrl}${AppRoutes.signOut}`);
      set({
        user: null,
        success:
          response.data.message || "Congratulations! You have signed out",
        isAuthenticated: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing out",
        isAuthenticated: false,
      });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  forgotPassword: async (email) => {
    set({ loading: true, success: null, error: null });
    try {
      const response = await axios.post(
        `${baseUrl}${AppRoutes.forgotPassword}`,
        {
          email,
        }
      );
      set({
        success:
          response.data.message ||
          "An email has been sent to reset your password",
      });
    } catch (error) {
      set({
        error:
          error.response.data.message || "Error sending email reset password",
      });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  resetPassword: async (token, password) => {
    set({ loading: true, success: null, error: null });
    try {
      const response = await axios.post(
        `${baseUrl}${AppRoutes.resetPassword}/${token}`,
        {
          token,
          password,
        }
      );
      set({
        success:
          response.data.message ||
          "Congratulations! You have successfully reset your password",
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error resetting password",
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
    set({ loading: true, isVerifying: true, success: null, error: null });
    try {
      const response = await axios.get(`${baseUrl}${AppRoutes.verifyToken}`);
      set({
        user: response.data.user,
        success: response.data.message,
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        isAuthenticated: false,
        error: error.response.data.message,
      });
    } finally {
      set({ loading: false, isVerifying: false });
    }
  },
}));
