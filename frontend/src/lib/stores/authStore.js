import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  authorized: false,
  setUser: (user) => set({ user: user }),
  setAuthorized: (authorized) => set({ authorized: authorized }),
}));

export { useAuthStore };
