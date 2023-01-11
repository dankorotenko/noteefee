import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

import "./css/App.scss";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/notifications" element={<Home />} />
          <Route path="/notifications/login" element={<Login />} />
          <Route path="/notifications/signup" element={<SignUp />} />
        </Routes>
      </div>
  );
}

export default App;
