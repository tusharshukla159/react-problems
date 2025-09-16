import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const TwentyFour = () => {
  const { user, login, logout } = useContext(AuthContext);
  return (
    <div>
      <h1>UserAuthentication Example</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ username: "ravi" })}>Login</button>
      )}
    </div>
  );
};

export default TwentyFour;
