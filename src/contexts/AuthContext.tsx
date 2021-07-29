import React, { createContext, useEffect, useState } from "react";
import {
  authCheckIsAuthenticated,
  authLogin,
  authLogout,
  authRegister,
} from "../api/endpoints/authentication";
import { IUser, IUserRegister } from "../types/users";
import { Spin } from "antd";

interface IAuthContext {
  user: IUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  register: (values: IUserRegister) => void;
  logout: () => void;
}

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

const AuthContext = createContext<IAuthContext>({
  ...initialState,
  register: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSiteLoading, setIsSiteLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const register = (values: IUserRegister) => {
    setIsLoading(true);
    authRegister(values)
      .then((user) => {
        if (user) {
          setUser(user);
          setIsAuthenticated(true);
        } else {
          alert(user);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const login = (email: string, password: string) => {
    setIsLoading(true);
    authLogin(email, password)
      .then((user) => {
        if (user) {
          setUser(user);
          setIsAuthenticated(true);
        } else {
          alert(user);
        }
      })
      .finally(() => setIsLoading(false));
  };
  const logout = () => {
    authLogout();
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    authCheckIsAuthenticated()
      .then((user) => {
        setUser(user);
        if (user) {
          console.log("user :>> ", user);
          setIsAuthenticated(true);
        }
      })
      .finally(() => setIsSiteLoading(false));
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isAuthenticated,
        login,
        logout,
        register,
        user,
      }}
    >
      {isSiteLoading ? <SiteLoader /> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

const SiteLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
    }}
  >
    <Spin size="large" />
  </div>
);
