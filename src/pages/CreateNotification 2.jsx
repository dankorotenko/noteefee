import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";

import InfoCard from "../components/InfoCard";
import Triggers from "../components/Triggers";

import bolt from "../assets/bolt.svg";
import bell from "../assets/bell.svg";

export default function Home() {
  const [trigger, setTrigger] = useState(null);
  const handleChildProps = (childProps) => {
    setTrigger(childProps);
  }
  return (
    <main className={`main container ${trigger && trigger.trigger}`}>
      <section className="info">
        <InfoCard title="Active Notifications" percent={1} max={3} />
        <InfoCard
          title="Delivered Notifications / Month"
          percent={0}
          max={300}
        />
      </section>

      <section className="trigger">
        <h3 className="trigger__title">
          <img src={bolt} /> Trigger
        </h3>
        <p className="trigger__text">When this happens...</p>
        <Triggers handleChildProps={handleChildProps}/>
      </section>

      <div className="arrow">
        <BsArrowDown size="2.5em" color="#8C5AE8" />
      </div>

      <section className="action">
        <h3 className="action__title">
          <img src={bell} /> Action
        </h3>
        <p className="action__text">Then do this...</p>
        <button className="btn bordered">Create Action</button>
      </section>
      <hr />
      <div className="submit-wrapper">
        <input type="text" className="submit-input" placeholder="Name" />
        <button className="submit-button">Save Notification</button>
      </div>
    </main>
  );
}
