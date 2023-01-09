import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import "./css/App.css";
import { BsArrowDown } from "react-icons/bs";

import bolt from "./assets/bolt.svg";
import bell from "./assets/bell.svg";
import Triggers from "./components/Triggers";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main container">
        <section className="info">
          <InfoCard title="Active Notifications" percent={1} max={3} />
          <InfoCard
            title="Delivered Notifications / Month"
            percent={0}
            max={300}
          />
        </section>

        <section className="trigger container">
          <h3 className="trigger__title">
            <img src={bolt} /> Trigger
          </h3>
          <p className="trigger__text">When this happens...</p>
          <Triggers />
        </section>

        <div className="arrow">
          <BsArrowDown size="2.5em" color="#8C5AE8" />
        </div>

        <section className="action container">
          <h3 className="action__title">
            <img src={bell} /> Action
          </h3>
          <p className="action__text">Then do this...</p>
          <button className="btn bordered">Create Action</button>
        </section>
        <hr />
        <div className="input-wrapper">
          <input type="text" className="input-input" placeholder="Name"/>
          <button className="input-button">Save Notification</button>
        </div>
      </main>
    </div>
  );
}

export default App;
