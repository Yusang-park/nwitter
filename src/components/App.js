import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "../firebase_config";
import { signOut } from "@firebase/auth";

function App() {
  const auth = authService;
  const [initFirebase, setInitFirebase] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      }
      setInitFirebase(true);
    });
  });

  const logout = () => {
    signOut(authService).then(() => {
      setIsLoggedIn(false);
    });
  };

  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn} />
      {isLoggedIn && <button onClick={logout}>Logout</button>}
      <footer>
        Copyright &copy;{new Date().getFullYear()} made by PitterPark
      </footer>
    </div>
  );
}

export default App;
