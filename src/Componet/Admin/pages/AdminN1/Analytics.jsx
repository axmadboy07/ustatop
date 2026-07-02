import React from "react";
import "./Analytics.css";

const Analytics = () => {
  return (
    <section className="panel analytics-panel">
      <div className="panel-heading">
        <div>
          <p className="panel-kicker">Performance</p>
          <h2>Revenue & Growth</h2>
        </div>
        <button className="ghost-btn">View report</button>
      </div>

      <div className="analytics-grid">
        <article className="chart-card large-chart">
          <div className="chart-header">
            <span>Revenue Chart</span>
            <strong>+$28.4K</strong>
          </div>
          <div className="chart-surface">
            <div className="line-chart" />
          </div>
        </article>

        <article className="chart-card">
          <div className="chart-header">
            <span>Orders</span>
            <strong>+12%</strong>
          </div>
          <div className="bar-chart" />
        </article>

        <article className="chart-card">
          <div className="chart-header">
            <span>Weekly Growth</span>
            <strong>+9.2%</strong>
          </div>
          <div className="mini-stat">
            <h3>78%</h3>
            <p>Positive momentum</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Analytics;
