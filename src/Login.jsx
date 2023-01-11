import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

import "./css/sign.scss";

export default function Login() {
  return (
    <section className="login">
      <img src={logo} alt={logo} width="370"/>
      <div className="underline"></div>
      <h2>Welcome back!</h2>
      <p>Don’t have an account yet? <Link to="/notifications/signup" >Register</Link> </p>
      <form>

      </form>
    </section>
  );
}
