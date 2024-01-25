import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState();
  const values = { user, setUser };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
