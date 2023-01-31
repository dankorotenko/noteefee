import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Notifications from "./pages/Notifications";
import CreateNotification from "./pages/CreateNotification";
import Streams from "./pages/Streams";
import SingleNotification from "./pages/SingleNotification";
import NoMatch from "./pages/NoMatch";

import "./css/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/noteefee/" element={<Notifications />} />
        <Route path="/noteefee/login" element={<Login />} />
        <Route path="/noteefee/signup" element={<SignUp />} />
        <Route path="/noteefee/streams" element={<Streams />} />
        <Route path="/noteefee/notifications" element={<Notifications />} />
        <Route path="/noteefee/notifications/create" element={<CreateNotification />} />
        <Route path="/noteefee/notifications/:notificationId" element={<SingleNotification />} />
        <Route path="/noteefee/*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
