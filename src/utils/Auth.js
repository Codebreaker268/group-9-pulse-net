// utils/Auth.js
export const isAuthenticated = () => {
    return localStorage.getItem('user') !== null;
  };
  