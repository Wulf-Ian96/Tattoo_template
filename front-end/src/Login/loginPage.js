import React, { useRef, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, adminToken } from "../firebase";
import "./loginPage.css";
import Admin from "../Admin/Main-Admin-Page/Main_Admin";
export default function LoginPage({ artists, currentUser, setCurrentUser }) {
  console.log("curr user", currentUser, "admin token", adminToken);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [formData, setFormData] = useState({ email: "", password: "" });
  function submitSignup(e) {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;
    createUserWithEmailAndPassword(auth, email, password).then((cred) => {
      console.log("user created", cred.user);
    });
  }
  function logOut(e) {
    e.preventDefault();
    signOut(auth).then(console.log("user Signed Out"));
  }

  function loginUser(e) {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        setCurrentUser(cred.user.uid);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleChagne(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  console.log(formData);

  //   subscribing to auth changes
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user.uid);
    });
  }, []);
  return (
    <>
      {currentUser === adminToken ? (
        <Admin artists={artists} />
      ) : (
        <div>
          <form className="login-form">
            <label>Email</label>

            <input
              onChange={handleChagne}
              type="email"
              placeholder="email address"
              ref={emailRef}
              name="email"
              value={formData.email}
            />
            <label>Password</label>
            <input
              onChange={handleChagne}
              type="password"
              placeholder="password"
              ref={passwordRef}
              name="password"
              value={formData.password}
            />
            <label>Confirm Password</label>
            <input
              onChange={handleChagne}
              type="password"
              placeholder="password confrimation"
              ref={passwordConfirmRef}
              name="passwordConfirm"
            />
            <button onClick={submitSignup}>signup</button>
            <button onClick={logOut}>signout</button>
            <button onClick={loginUser}>login</button>
          </form>
        </div>
      )}
    </>
  );
}
