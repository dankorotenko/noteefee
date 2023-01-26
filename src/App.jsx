import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import CreateNotification from "./CreateNotification";
import Streams from "./Streams";
import SingleNotification from './SingleNotification';

import "./css/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/noteefee/" element={<Home />} />
        <Route path="/noteefee/login" element={<Login />} />
        <Route path="/noteefee/signup" element={<SignUp />} />
        <Route path="/noteefee/notifications" element={<Home />} />
        <Route path="/noteefee/notifications/:notificationID" element={<SingleNotification />} />
        <Route path="/noteefee/streams" element={<Streams />} />
        <Route path="/noteefee/notifications/create" element={<CreateNotification />} />
      </Routes>
    </div>
  );
}

export default App;
