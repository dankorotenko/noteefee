import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Wallet from "../components/icons/Wallet";
import user from "../assets/icons/la_user.svg";
import "../css/header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [auth, setAuth] = useState("");
  const location = useLocation();
  useEffect(() => {
    setAuth(
      location.pathname.split("/")[location.pathname.split("/").length - 1] ===
        "login" ||
        location.pathname.split("/")[
          location.pathname.split("/").length - 1
        ] === "signup"
        ? "log"
        : ""
    );
  }, [location]);

  return (
    <header className={`${auth}`}>
      <nav className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="noteefee" />
          </a>
        </div>
        <div className="right">
          <div className="wallet">
            <Wallet />
            <p className="wallet__id">Connect</p>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">
              <img src={user} alt="E" />
              Account
            </button>
            <div className="dropdown-content">
              <Link to="/noteefee/login">Log In</Link>
              <Link to="/noteefee/signup">Sign Up</Link>
              <hr className="divider"/>
              <Link to="/noteefee/">Notify</Link>
              <a href="#">Billing</a>
              <a href="#">Settings</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="line"></div>
    </header>
  );
}
