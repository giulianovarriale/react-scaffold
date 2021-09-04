import create from "zustand";

import tokenStorage from "../services/token-storage";

interface IAuthStore {
  token: string | null;
  setToken: (value: string | null) => void;
}

const useAuthStore = create<IAuthStore>((set) => ({
  token: tokenStorage.get(),
  setToken: (value) => set({ token: value }),
}));

export default function useAuth() {
  const { token, setToken } = useAuthStore();

  function logout() {
    setToken(null);
    tokenStorage.remove();
  }

  function saveToken(token: string) {
    setToken(token);
    tokenStorage.set(token);
  }

  return {
    isLoading: false,
    data: token ? { token } : null,
    logout,
    saveToken,
  };
}
