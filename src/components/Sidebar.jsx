import React, { useState } from "react";

import Sms from "./icons/Sms";
import FileInvoiceDollar from "./icons/FileInvoiceDollar";
import Puzzle from "./icons/Puzzle";
import Cog from "./icons/Cog";
import Wallet from "./icons/Wallet";
import { Link } from "react-router-dom";

export default function Sidebar({tab}) {
  const [activeTab, setActiveTab] = useState(tab);
  const tabs = [
    {
      title: "Notifications",
      component: <Sms />,
      path: "/noteefee/notifications",
    },
    {
      title: "Streams",
      component: <Puzzle />,
      path: "/noteefee/streams",
    },
    {
      title: "Billing",
      component: <FileInvoiceDollar />,
      path: "/noteefee/billing",
    },
    {
      title: "Settings",
      component: <Cog />,
      path: "/noteefee/settings",
    },
    {
      title: "Connect Wallet",
      component: <Wallet />,
      path: "/noteefee/notifications",
    },
  ];
  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        {tabs.map((tab) => (
          <Link to={tab.path}
            className={`sidebar__list_link ${
              activeTab === tab.title.toLowerCase() && "active"
            }`}
            key={tab.title.toLowerCase()}
            onClick={() => setActiveTab(tab.title.toLowerCase())}
          >
            {tab.component}
            {tab.title}
          </Link>
        ))}
      </ul>
    </aside>
  );
}
