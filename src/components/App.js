import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "../firebase_config";

function App(props) {
  const auth = authService;
  const [initFirebase, setInitFirebase] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInitFirebase(true);
    });
  });

  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn} />

      <footer>
        Copyright &copy;{new Date().getFullYear()} made by PitterPark
      </footer>
    </div>
  );
}

export default App;
