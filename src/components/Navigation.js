import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "@firebase/auth";
import { authService } from "../firebase_config";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();
  const logout = () => {
    signOut(authService).then(() => {
      history.push("/");
    });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navigation;
