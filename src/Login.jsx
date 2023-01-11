import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

import "./css/sign.scss";

export default function Login() {
  return (
    <section className="sign">
      <div className="sign__wrapper">
        <img src={logo} alt={logo} width="370" />
        <div className="underline"></div>
        <div className="sign__inner">
          <h2 className="sign__title">Welcome back!</h2>
          <p className="sign__desc">
            Don’t have an account yet?
            <Link to="/notifications/signup">Sign Up</Link>
          </p>
          <form className="sign__form">
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button className="btn filled">Log In</button>
          </form>
        </div>
      </div>
    </section>
  );
}
