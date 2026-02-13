import { create } from "zustand";

const useUserStore = create((set, get) => ({
  username: null,
  token: null,
}));
