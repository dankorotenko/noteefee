import React, { useState } from "react";


import "./css/home.scss";

import Sidebar from "./components/Sidebar";
import Notifications from "./Notifications";

export default function Home() {

  return (
    <div className="dashboard">
      <Sidebar />
      <section className="content">
        <Notifications />
      </section>
    </div>
  );
}
