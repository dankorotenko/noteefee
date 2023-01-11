import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

import "./css/sign.scss";

export default function SignUp() {
  return (
    <section className="login">
      <img src={logo} alt={logo} width="370"/>
      <div className="underline"></div>
      <h2>Create an account</h2>
      <p>Already have an account? <Link to="/notifications/login" >Log in</Link> </p>
      <form>

      </form>
    </section>
  );
}