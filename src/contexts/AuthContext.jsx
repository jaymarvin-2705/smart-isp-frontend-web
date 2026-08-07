// src/contexts/AuthContext.jsx
import { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { authService } from '../services/auth.service';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper to re-fetch current user on demand
  const refreshUser = useCallback(async () => {
    try {
      const res = await authService.getCurrentUser();
      setUser(res.data);
    } catch (error) {
      localStorage.removeItem('auth_token');
      setUser(null);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const token = localStorage.getItem('auth_token');

    if (token) {
      authService.getCurrentUser()
        .then((res) => {
          if (isMounted) setUser(res.data);
        })
        .catch(() => {
          if (isMounted) {
            localStorage.removeItem('auth_token');
            setUser(null);
          }
        })
        .finally(() => {
          if (isMounted) setLoading(false);
        });
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const login = useCallback(async (credentials) => {
    try {
      setLoading(true);
      const res = await authService.login(credentials);
      localStorage.setItem('auth_token', res.data.token);
      setUser(res.data.user);
      return res;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      setLoading(true);
      await authService.logout();
    } catch (error) {
      // Log or handle API logout failure if needed
    } finally {
      localStorage.removeItem('auth_token');
      setUser(null);
      setLoading(false);
    }
  }, []);

  // Memoize context value to prevent unnecessary re-renders of consumers
  const value = useMemo(() => ({
    user,
    setUser,
    login,
    logout,
    refreshUser,
    loading,
    isAuthenticated: !!user,
  }), [user, loading, login, logout, refreshUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Allows both named import `{ AuthProvider }` and default import `AuthProvider`
export default AuthProvider;