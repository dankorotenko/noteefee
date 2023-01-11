import React from "react";
import InfoCard from "./components/InfoCard";
import { BsArrowDown } from "react-icons/bs";
import bolt from "./assets/bolt.svg";
import bell from "./assets/bell.svg";
import Triggers from "./components/Triggers";
export default function Home() {
  return (
    <main className="main container">
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
        <Triggers />
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
