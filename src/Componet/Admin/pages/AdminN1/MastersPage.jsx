import React from "react";
import { Link } from "react-router-dom";
import "./MastersPage.css";
import AdminLayout from "./AdminLayout";

const masters = [
  { name: "Ali Rustamov", specialty: "Plumbing", rating: "4.9", location: "Tashkent", jobs: "320" },
  { name: "Bekzod Karim", specialty: "Electrical", rating: "4.8", location: "Samarkand", jobs: "280" },
  { name: "Zafar Yusupov", specialty: "Painting", rating: "4.7", location: "Bukhara", jobs: "250" },
];

const MastersPage = () => {
  return (
    <AdminLayout>
      <main className="page-shell">
        <section className="hero-panel compact">
          <div>
            <p className="eyebrow">Master Management</p>
            <h1>Review top professionals and manage performance.</h1>
            <p>Keep the best masters visible, monitor quality, and support growth.</p>
          </div>
          <Link to="/admin" className="ghost-btn">Back to Dashboard</Link>
        </section>

        <section className="masters-grid-page">
          {masters.map((master) => (
            <article key={master.name} className="master-card-page">
              <div className="master-card-header">
                <div className="avatar large">{master.name.charAt(0)}</div>
                <div>
                  <h3>{master.name}</h3>
                  <p>{master.specialty}</p>
                </div>
              </div>
              <div className="master-card-meta">
                <span>⭐ {master.rating}</span>
                <span>{master.jobs} jobs</span>
              </div>
              <p className="master-location">📍 {master.location}</p>
              <button className="primary-btn">View Profile</button>
            </article>
          ))}
        </section>
      </main>
    </AdminLayout>
  );
};

export default MastersPage;
