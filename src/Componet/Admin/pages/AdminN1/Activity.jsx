import React from "react";
import "./Activity.css";

const activities = [
  { title: "New admin login", detail: "Akmal signed in from Tashkent", icon: "⏱" },
  { title: "Payment settled", detail: "Revenue transfer completed", icon: "💳" },
  { title: "Order updated", detail: "Master accepted a new service request", icon: "📦" },
  { title: "New user registered", detail: "5 new clients joined today", icon: "👤" },
];

const Activity = () => {
  return (
    <section className="panel activity-panel">
      <div className="panel-heading">
        <div>
          <p className="panel-kicker">Timeline</p>
          <h2>Recent Activity</h2>
        </div>
      </div>

      <div className="timeline">
        {activities.map((item) => (
          <article key={item.title} className="timeline-item">
            <div className="timeline-icon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Activity;
