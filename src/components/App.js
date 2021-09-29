import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../firebase_config";

function App() {
  const auth = authService;
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
