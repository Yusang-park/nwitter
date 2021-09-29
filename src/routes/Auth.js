import { createUserWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { authService } from "../firebase_config";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onPressed = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (newAccount) {
      await createUserWithEmailAndPassword(authService, email, password);
    } else {
    }
  };

  return (
    <div>
      <form>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onPressed}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onPressed}
        />
        <input
          type="Submit"
          value={newAccount ? "Create" : "Login"}
          required
          onClick={onSubmit}
        />
      </form>
      <div>
        <button>Sign In with Google</button>

        <button>Sign In with Github</button>
      </div>
    </div>
  );
};

export default Auth;
