import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, showError] = useState(false);

  const onLogin = (event) => {
    event.preventDefault();
    let userData = JSON.parse(localStorage.getItem("userInputData"));
    if (userData.email === email && userData.password === password) {
      localStorage.setItem("userLoggedIn", true);
      window.open("/", "_self");
    } else if (email.length === 0 || password.length === 0) {
      showError(true);
    } else {
      showError(true);
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={onLogin}>
          <h1 className="login-heading">Log in</h1>
          <div className="input-cont">
            <label htmlFor="email" className="login-label">
              E-MAIL
            </label>
            <input
              type="email"
              id="email"
              className="login-input"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Enter Your Email Id"
            />
          </div>
          <div className="input-cont">
            <label htmlFor="password" className="login-label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="login-input"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Enter Your Password"
            />
          </div>

          <button type="submit" className="login-button">
            Log In
          </button>
          {error && <p className="error-msg">Check Your Details</p>}
        </form>
        <div className="cont-two">
          <p className="login-note">Not Yet Registered ?? Please Register!</p>
          <NavLink to="/register" className="link-item">
            <button type="button" className="reg-button">
              Register
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Login;
