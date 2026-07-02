import React from "react";
import "./Notifications.css";

const notifications = [
  { title: "New payment received", time: "2m ago", priority: "high" },
  { title: "Master review updated", time: "15m ago", priority: "medium" },
  { title: "Urgent order flagged", time: "1h ago", priority: "urgent" },
];

const Notifications = () => {
  return (
    <section className="panel notifications-panel">
      <div className="panel-heading">
        <div>
          <p className="panel-kicker">Insights</p>
          <h2>Notifications</h2>
        </div>
        <span className="badge">3 unread</span>
      </div>

      <div className="notifications-list">
        {notifications.map((item) => (
          <article key={item.title} className={`notif-card ${item.priority}`}>
            <div className="notif-dot" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.time}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Notifications;
