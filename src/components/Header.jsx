import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import wallet from "../assets/icons/la_wallet.svg";
import bars from "../assets/icons/la_bars.svg";
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
        ? "sign"
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
            <img src={wallet} alt="wlt" />
            <p className="wallet__id">Connect</p>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">
              Menu <img src={bars} alt="E" />
            </button>
            <div className="dropdown-content">
              <Link to="/notifications/">Notify</Link>
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
