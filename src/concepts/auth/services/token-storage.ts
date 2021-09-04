const STORAGE_KEY = "token";

const tokenStorage = {
  set(token: string) {
    localStorage.setItem(STORAGE_KEY, token);
  },
  get() {
    return localStorage.getItem(STORAGE_KEY);
  },
  remove() {
    localStorage.removeItem(STORAGE_KEY);
  },
};

export default tokenStorage;
