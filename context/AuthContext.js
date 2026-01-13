"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check local storage for persisted session on load
    const storedUser = localStorage.getItem('sahay_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock Logic
    if (email === 'budi@gmail.com' && password === 'budi123') {
      const userData = { name: 'Budi Santoso', email, role: 'user' };
      setUser(userData);
      localStorage.setItem('sahay_user', JSON.stringify(userData));
      router.push('/dashboard');
      return { success: true };
    }

    if (email === 'admin@banksampah.id' && password === 'admin123') {
      const adminData = { name: 'Admin User', email, role: 'admin' };
      setUser(adminData);
      localStorage.setItem('sahay_user', JSON.stringify(adminData));
      router.push('/admin/dashboard');
      return { success: true };
    }

    return { success: false, error: 'Invalid email or password' };
  };

  const register = (userData) => {
    // Mock Logic
    if (userData.password !== userData.confirmPassword) {
      return { success: false, error: 'Passwords do not match' };
    }

    // Simulate successful registration and auto-login
    const newUser = {
      name: userData.fullName,
      email: userData.email,
      role: userData.role
    };

    setUser(newUser);
    localStorage.setItem('sahay_user', JSON.stringify(newUser));
    router.push('/dashboard');
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sahay_user');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
