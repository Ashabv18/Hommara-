"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("zorova_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("zorova_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock login - in production, call your backend API
    // For demo, we'll accept any email/password combination
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    
    const mockUser: User = {
      id: "user_" + Date.now(),
      name: email.split("@")[0],
      email,
      phone: "",
    };
    
    setUser(mockUser);
    localStorage.setItem("zorova_user", JSON.stringify(mockUser));
    setIsLoading(false);
    return true;
  }, []);

  const signup = useCallback(async (name: string, email: string, phone: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock signup - in production, call your backend API
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    
    const mockUser: User = {
      id: "user_" + Date.now(),
      name,
      email,
      phone,
    };
    
    setUser(mockUser);
    localStorage.setItem("zorova_user", JSON.stringify(mockUser));
    setIsLoading(false);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("zorova_user");
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoading,
      login,
      signup,
      logout,
      isAuthenticated: !!user,
    }),
    [user, isLoading, login, signup, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Helper to get auth token (mock)
export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("zorova_user");
}