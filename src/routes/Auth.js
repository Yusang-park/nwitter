import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signInWithPopup,
} from "@firebase/auth";
import React, { useState } from "react";
import { authService } from "../firebase_config";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInMode, setSignInMode] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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
    try {
      let data;
      if (signInMode) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        ).then((e) => setErrorMessage(e));
      } else {
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (e) {
      setErrorMessage(e.message.replace("Firebase: Error ", ""));
    }
  };

  const toggleMode = () => {
    setSignInMode(!signInMode);
  };

  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;

    if (name === "google") {
      const provider = new GoogleAuthProvider();
      await new signInWithRedirect(authService, provider);
      const result = await getRedirectResult(authService);
      if (result) {
        // const user = result.user;
        // const credential = provider.credentialFromResult(authService, result);
        // const token = credential.accessToken;
      }
      // const operationType = result.operationType;
    } else if (name === "github") {
      const provider = new GithubAuthProvider();
      await new signInWithRedirect(authService, provider);
      const result = await getRedirectResult(authService);
      if (result) {
        // const user = result.user;
        // const credential = provider.credentialFromResult(authService, result);
        // const token = credential.accessToken;
      }
      // const operationType = result.operationType;
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
          value={signInMode ? "Create" : "Login"}
          required
          onClick={onSubmit}
        />
      </form>
      {errorMessage}
      <div>
        <button onClick={onSocialClick} name="google">
          Sign In with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Sign In with Github
        </button>
      </div>
      <span onClick={toggleMode}>
        {signInMode ? "already have an account" : "I don't have an account"}
      </span>
    </div>
  );
};

export default Auth;
