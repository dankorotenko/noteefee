import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import eye from "./assets/icons/la_eye-slash.svg";

import "./css/sign.scss";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="sign login">
      <div className="sign__wrapper">
        <img className="logo-img" src={logo} alt={logo} width="370" />
        <div className="underline"></div>
        <div className="sign__inner">
          <h2 className="sign__title">Welcome back!</h2>
          <p className="sign__desc">
            Don’t have an account yet?
            <Link to="/notifications/signup">Sign Up</Link>
          </p>
          <form className="sign__form">
            <div>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
              />
              <img
                src={eye}
                alt="eye"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <button className="btn filled">Log In</button>
          </form>
        </div>
      </div>
      <div className="sign__smartphone">
        <div className="sign__tip">
          <span>Don’t miss</span> a thing about events that happen on the
          blockchain!
        </div>
        <img src="smartphone.png" alt="smartphone" />
      </div>
    </section>
  );
}
