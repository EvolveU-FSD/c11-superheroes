import React from "react";
import BlueBackground from "./BlueBackground";
import { useAuth } from "./AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { setUser, user } = useAuth();
  const logout = () => setUser(null);
  return (
    <BlueBackground bold={false}>
      <div>
        {!user && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {user && <button onClick={logout}>Logout</button>}
        {user && (
          <Link to="/add">
            <button>Add A Superhero</button>
          </Link>
        )}
      </div>
      <h1>Superheroes Registry</h1>
      <h5>
        2023 Edition<b>!</b>
      </h5>
    </BlueBackground>
  );
};

export default Header;
