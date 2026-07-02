import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext({
  authUser: null,
  setAuthUser: () => {},
  logout: () => {},
});

export const AppProviders = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const logout = () => setAuthUser(null);

  const value = useMemo(() => ({ authUser, setAuthUser, logout }), [authUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
