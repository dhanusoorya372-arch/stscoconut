import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('sts_admin_user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('sts_admin_token') || '');

  useEffect(() => {
    if (user) {
      localStorage.setItem('sts_admin_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('sts_admin_user');
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('sts_admin_token', token);
    } else {
      localStorage.removeItem('sts_admin_token');
    }
  }, [token]);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
  };

  const logout = () => {
    setUser(null);
    setToken('');
  };

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [user, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
