import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { User } from "@/utils/types/user";

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
  updateUser: (userData: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return !!localStorage.getItem("token") && !!localStorage.getItem("user");
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        if (!user || !token || parsedUser._id !== user?._id || storedToken !== token) {
          setUser(parsedUser);
          setToken(storedToken);
          setIsLoggedIn(true);
        }
      } catch (e) {
        console.error("Failed to parse user data from localStorage or data is corrupt", e);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
        setIsLoggedIn(false);
      }
    } else if (isLoggedIn) {
      setUser(null);
      setToken(null);
      setIsLoggedIn(false);
    }
  }, [user, token, isLoggedIn]);

  const login = useCallback((newToken: string, userData: User) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setToken(newToken);
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);

    window.location.href = "/auth/login";
  }, []);

  const updateUser = useCallback((userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  }, []);

  const authContextValue: AuthContextType = {
    user,
    token,
    isLoggedIn,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
