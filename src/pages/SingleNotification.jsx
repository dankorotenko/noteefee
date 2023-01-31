import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Sidebar from "../components/Sidebar";

import { notifications } from "../data/dummy";

export default function SingleNotification() {
  const { notificationId } = useParams();
  const findOne = notifications.find((n) => n.id === notificationId);

  const [active, setActive] = useState(findOne.active);

  return (
    <div className="dashboard">
      <Sidebar tab={"notifications"} />
      <section className="content notification">
        <div className="content__header">
          <h2 className="content__header_title">{findOne.title}</h2>
          <div className="content__header_btns">
            <button className="btn bordered">Delete</button>
            <button className="btn bordered" onClick={() => setActive(!active)}>{active ? 'Deactivate' : 'Activate'}</button>
            <button className="btn filled">Edit notification</button>
          </div>
        </div>
        <div className="content__back">
          <BsArrowLeftCircleFill color="#8C5AE8" /> Back
        </div>
        <div className="content__subheader expanded-card">
          <div className="expanded-card__left">
            <div className="expanded-card__logos">
              {findOne.logos[0]}
              {findOne.logos[1]}
            </div>
            <div className="expanded-card__text">{findOne.description}</div>
          </div>
          <div className="expanded-card__right">
            <div className="expanded-card__delivered">
              {findOne.amount} Delivered
            </div>
            <div
              className={`expanded-card__status ${!active && "no-active"}`}
            >
              {active ? "Active" : "No Active"}
            </div>
          </div>
        </div>
        <div className="content__body">
          <h3 className="content__body_title">Notification history</h3>
        </div>
      </section>
    </div>
  );
}
