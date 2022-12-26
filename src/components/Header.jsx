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
          <a href="/"><img src={logo} alt="noteefee" /></a>
        </div>
        <div className="right">
            <div className="wallet">
                <img src={wallet} alt="wlt" />
                <p className="wallet__id">0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6</p>
            </div>
            <button className="btn filled">Menu <img src={bars} alt="E" /></button>
        </div>
      </nav>
      <div className="line"></div>
    </header>
  );
}
