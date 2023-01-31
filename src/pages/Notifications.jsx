import React from "react";

import { Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";

import "../css/home.scss";

import InfoCard from "../components/InfoCard";
import Sidebar from "../components/Sidebar";

import { notifications } from "../data/dummy";

export default function Notifications() {
  return (
    <div className="dashboard">
      <Sidebar tab={"notifications"} />
      <section className="content">
        <div className="content__header">
          <h2 className="content__header_title">
            Notifications <AiOutlineInfoCircle color="#A8A8A8" />
          </h2>
          <div className="content__header_btns">
            <Link to="/noteefee/notifications/create" className="btn filled">
              Create a New notification
            </Link>
          </div>
        </div>
        <div className="content__subheader">
          <InfoCard
            title="Active Notifications"
            percent={notifications.length}
            max={10}
          />
          <InfoCard
            title="Delivered Notifications / Month"
            percent={notifications.reduce((sum, obj) => sum + obj.history.length, 0)}
            max={100}
          />
        </div>
        <div className="content__body">
          {notifications.length != 0 ? (
            notifications.map((n, i) => (
              <Link
                to={`/noteefee/notifications/${n.id}`}
                className="notification-card"
                key={i}
              >
                <div className="notification-card__left">
                  <div className="notification-card__logos">
                    {n.logos[0]}
                    {n.logos[1]}
                  </div>
                  <div className="notification-card__info">
                    <h3 className="notification-card__title">{n.title}</h3>
                    <p className="notification-card__desc">{n.description}</p>
                  </div>
                </div>

                <div className="notification-card__right">
                  <div
                    className={`notification-card__status ${
                      !n.active && "no-active"
                    }`}
                  >
                    {n.active ? "Active" : "No Active"}
                  </div>
                  <div className="notification-card__amount">
                    {n.history.length} Delivered
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <Link
              to="/noteefee/notifications/create"
              className="notification-card add"
            >
              <div className="wrapper">
                <BsPlusCircle color="#8C5AE8" size={32} />
                Create Notification
              </div>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
