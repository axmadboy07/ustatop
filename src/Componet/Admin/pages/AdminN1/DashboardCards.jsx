import React from "react";
import "./DashboardCards.css";

const cards = [
  { title: "Total Users", value: "24.8K", growth: "+12.4%", icon: "👤", tone: "blue" },
  { title: "Total Masters", value: "1.2K", growth: "+8.1%", icon: "🛠", tone: "green" },
  { title: "Orders", value: "3.4K", growth: "+15.7%", icon: "📦", tone: "amber" },
  { title: "Revenue", value: "$184K", growth: "+22.3%", icon: "💸", tone: "purple" },
];

const DashboardCards = () => {
  return (
    <section className="cards-grid" aria-label="Dashboard statistics">
      {cards.map((card) => (
        <article key={card.title} className={`stat-card ${card.tone}`}>
          <div className="stat-icon">{card.icon}</div>
          <div>
            <p>{card.title}</p>
            <h3>{card.value}</h3>
            <span>↗ {card.growth}</span>
          </div>
        </article>
      ))}
    </section>
  );
};

export default DashboardCards;
