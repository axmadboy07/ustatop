import React from "react";
import "./TopMasters.css";

const masters = [
  { name: "Ali Rustamov", rating: "4.9", jobs: "320", location: "Tashkent", specialty: "Plumbing" },
  { name: "Bekzod Karim", rating: "4.8", jobs: "280", location: "Samarkand", specialty: "Electrical" },
  { name: "Zafar Yusupov", rating: "4.7", jobs: "250", location: "Bukhara", specialty: "Painting" },
];

const TopMasters = () => {
  return (
    <section className="panel masters-panel">
      <div className="panel-heading">
        <div>
          <p className="panel-kicker">Top talent</p>
          <h2>Featured Masters</h2>
        </div>
        <button className="ghost-btn">See all</button>
      </div>

      <div className="masters-grid">
        {masters.map((master) => (
          <article key={master.name} className="master-card">
            <div className="master-header">
              <div className="avatar large">{master.name.charAt(0)}</div>
              <div>
                <h3>{master.name}</h3>
                <p>⭐ {master.rating}</p>
              </div>
            </div>
            <div className="master-meta">
              <span>{master.jobs} jobs</span>
              <span>{master.location}</span>
            </div>
            <p className="master-specialty">{master.specialty}</p>
            <button className="primary-btn">View Profile</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TopMasters;
