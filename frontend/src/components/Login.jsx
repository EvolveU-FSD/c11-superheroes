import React, { useState } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const login = () => {
    setUser(username);
    navigate(-1);
  };
  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
