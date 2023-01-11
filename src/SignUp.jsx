import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

import "./css/sign.scss";

export default function SignUp() {
  return (
    <section className="sign">
      <div className="sign__wrapper">
        <img src={logo} alt={logo} width="370" />
        <div className="underline"></div>
        <div className="sign__inner">
          <h2 className="sign__title">Create an account</h2>
          <p className="sign__desc">
            Already have an account?
            <Link to="/notifications/login">Log in</Link>
          </p>
          <form className="sign__form">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button className="btn filled">Register</button>
          </form>
        </div>
      </div>
    </section>
  );
}
