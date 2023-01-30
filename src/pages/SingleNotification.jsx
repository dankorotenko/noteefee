import React from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";

export default function SingleNotification() {
  const {notificationId } = useParams();
  return (
    <div className="dashboard">
      <Sidebar tab={"notifications"} />
      <section className="content">
        <h1>{notificationId}</h1>
      </section>
    </div>
  );
}
