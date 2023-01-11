import React from "react";
import logo from "../assets/logo.svg";
import wallet from "../assets/icons/la_wallet.svg";
import bars from "../assets/icons/la_bars.svg";
import "../css/header.css";

export default function Header() {
  return (
    <header>
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
              <a href="#">Notify</a>
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
