import React from "react";
import "./Dashboard.css";
import AdminLayout from "./AdminLayout";
import DashboardCards from "./DashboardCards";
import Analytics from "./Analytics";
import OrdersTable from "./OrdersTable";
import TopMasters from "./TopMasters";
import Notifications from "./Notifications";
import Activity from "./Activity";

const Dashboard = () => {
  return (
    <AdminLayout>
      <main className="dashboard-page">
        <section className="hero-panel">
          <div>
            <p className="eyebrow">UstaTop • Admin Command Center</p>
            <h1>Premium operations, sharper growth, calmer control.</h1>
            <p>
              Monitor bookings, manage masters, and keep every client experience at the highest standard.
            </p>
          </div>
          <div className="hero-badge">
            <span className="hero-dot" />
            Live & healthy
          </div>
        </section>

        <DashboardCards />

        <div className="dashboard-grid">
          <Analytics />
          <Notifications />
        </div>

        <div className="dashboard-grid dashboard-grid-lower">
          <OrdersTable />
          <Activity />
        </div>

        <TopMasters />
      </main>
    </AdminLayout>
  );
};

export default Dashboard;
