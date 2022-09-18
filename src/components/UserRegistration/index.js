import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const UserRegistration = () => {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [message, setSuccessMsg] = useState(false);

  const onRegister = (event) => {
    event.preventDefault();
    if (username.length === 0 || email.length === 0 || password.length === 0) {
      setError(true);
    } else {
      setSuccessMsg(true);
    }
    const userDetails = { username, email, password };
    localStorage.setItem("userInputData", JSON.stringify(userDetails));
  };

  return (
    <>
      <div className="reg-container">
        <form className="form" onClick={onRegister}>
          <h1 className="reg-heading">SIGN UP</h1>
          <div className="input-container">
            {error ? (
              <label className="label-error">Username Required</label>
            ) : (
              <label htmlFor="name" className="label">
                USERNAME
              </label>
            )}
            <input
              type="text"
              id="name"
              className="input"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              placeholder="Create Username"
            />
          </div>

          <div className="input-container">
            {error ? (
              <label className="label-error">Email Required</label>
            ) : (
              <label htmlFor="email" className="label">
                EMAIL
              </label>
            )}
            <input
              type="email"
              id="email"
              className="input"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Enter Your Email Id"
            />
          </div>

          <div className="input-container">
            {error ? (
              <label className="label-error">Password Required</label>
            ) : (
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
            )}
            <input
              type="password"
              id="password"
              className="input"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Create Password"
            />
          </div>

          <button type="submit" className="reg-button">
            Register
          </button>
          {message && (
            <p className="reg-success">User Registered Successfully</p>
          )}
        </form>
        <div className="reg-login-container">
          <p className="reg-note">
            If You are a Registered User You can Log in
          </p>
          <NavLink to="/login" className="link-item">
            <button type="button" className="reg-login">
              Log in
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default UserRegistration;
