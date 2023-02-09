import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Wallet from "./icons/Wallet";
import Bars from './icons/Bars'
import user from "../assets/icons/la_user.svg";
import "../css/header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [auth, setAuth] = useState("");
  const [openedMobileMenu, setOpenedMobileMenu] = useState(false);
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
          <a href="/noteefee/notifications">
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
              <Link to="/noteefee/notifications">Notify</Link>
              <a href="#">Billing</a>
              <a href="#">Settings</a>
            </div>
          </div>

          <div className="dropdown-mobile">
            <button className={`dropdown-button ${openedMobileMenu ? 'open' : ''}`} onClick={() => setOpenedMobileMenu(prev => !prev)} id="nav-icon">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={`dropdown-content ${openedMobileMenu ? 'opened' : ''}`}>
              <Link to="/noteefee/login">Log In</Link>
              <Link to="/noteefee/signup">Sign Up</Link>
              <hr className="divider"/>
              <Link to="/noteefee/notifications">Notify</Link>
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
