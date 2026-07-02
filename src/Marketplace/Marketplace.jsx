import React, { useState } from "react";
import "./Marketplace.css";

const Marketplace = () => {
  const workers = [
    {
      id: 1,
      name: "Akmal Elektrik",
      job: "Elektrik",
      exp: "6 yillik tajriba",
      rating: 4.9,
      jobs: 127,
      price: "120 000",
      location: "Toshkent",
      response: "5 daqiqa",
      online: true,
      verified: true,
      image: "https://i.pravatar.cc/300?img=12",
    },
    {
      id: 2,
      name: "Sardor Santexnik",
      job: "Santexnik",
      exp: "8 yillik tajriba",
      rating: 5.0,
      jobs: 203,
      price: "150 000",
      location: "Samarqand",
      response: "8 daqiqa",
      online: false,
      verified: true,
      image: "https://i.pravatar.cc/300?img=15",
    },
    {
      id: 3,
      name: "Javohir Quruvchi",
      job: "Quruvchi",
      exp: "12 yillik tajriba",
      rating: 4.8,
      jobs: 315,
      price: "250 000",
      location: "Andijon",
      response: "12 daqiqa",
      online: true,
      verified: false,
      image: "https://i.pravatar.cc/300?img=18",
    },
  ];

  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState([]);

  return (
    <main className="marketplace">
      {/* Header */}
      <section className="marketplace-header">
        <h1>Marketplace</h1>

        <p>
          O'zingizga mos ustani toping va bir necha daqiqada buyurtma bering.
        </p>
      </section>

      {/* Search */}
      <section className="marketplace-search">
        <input
          type="text"
          placeholder="Elektrik, Santexnik..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>Qidirish</button>
      </section>

      {/* Categories */}
      <section className="marketplace-categories">
        <button className="active">Barchasi</button>
        <button>⚡ Elektrik</button>
        <button>🚿 Santexnik</button>
        <button>🎨 Bo'yoqchi</button>
        <button>🧱 Quruvchi</button>
        <button>🧹 Tozalash</button>
      </section>

      {/* Workers */}
      <section className="workers-grid">
        {workers
          .filter(
            (worker) =>
              worker.name.toLowerCase().includes(search.toLowerCase()) ||
              worker.job.toLowerCase().includes(search.toLowerCase())
          )
          .map((worker) => (
            <div className="worker-card" key={worker.id}>
              <div
                className="favorite"
                onClick={() => {
                  if (favorite.includes(worker.id)) {
                    setFavorite(favorite.filter((id) => id !== worker.id));
                  } else {
                    setFavorite([...favorite, worker.id]);
                  }
                }}
              >
                {favorite.includes(worker.id) ? "❤️" : "🤍"}
              </div>

              <img src={worker.image} alt={worker.name} />

              <div className="worker-status">
                {worker.online ? (
                  <span className="online">🟢 Online</span>
                ) : (
                  <span className="offline">🔴 Offline</span>
                )}
              </div>

              <h3>
                {worker.name}
                {worker.verified && (
                  <span className="verified"> ✔</span>
                )}
              </h3>

              <p>
                {worker.job} • {worker.exp}
              </p>

              <div className="worker-info">
                <span>⭐ {worker.rating}</span>
                <span>{worker.jobs} ta ish</span>
              </div>

              <div className="worker-extra">
                <p>📍 {worker.location}</p>
                <p>⚡ {worker.response}</p>
              </div>

              <div className="worker-price">
                {worker.price} so'm
              </div>

              <div className="worker-buttons">
                <button className="profile-btn">
                  Profil
                </button>

                <button className="order-btn">
                  Buyurtma
                </button>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Marketplace;