import React from "react";
import "./ClientDashboard.css";

const ClientDashboard = () => {
  return (
    <main className="dashboard">

      {/* Hero */}

      <section className="dashboard-hero">

        <div>
          <span className="dashboard-badge">
            👋 Xush kelibsiz
          </span>

          <h1>Client Dashboard</h1>

          <p>
            UstaTop orqali barcha buyurtmalaringizni, ustalaringizni,
            xabarlaringizni va hisobingizni bitta joydan boshqaring.
          </p>
        </div>

        <button className="new-order-btn">
          + Yangi Buyurtma
        </button>

      </section>

      {/* Statistics */}

      <section className="dashboard-stats">

        <div className="stat-card">
          <h2>12</h2>
          <p>Buyurtmalar</p>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>Jarayonda</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Tugallangan</p>
        </div>

        <div className="stat-card">
          <h2>15</h2>
          <p>Saqlangan Ustalar</p>
        </div>

      </section>

      {/* Main Grid */}

      <section className="dashboard-grid">

        {/* Orders */}

        <div className="dashboard-card">

          <div className="card-header">
            <h2>So'nggi Buyurtmalar</h2>
            <button>Hammasi</button>
          </div>

          <div className="order-item">
            <div>
              <h3>Elektrik chaqirish</h3>
              <span>Bugun • Toshkent</span>
            </div>

            <span className="status process">
              Jarayonda
            </span>
          </div>

          <div className="order-item">
            <div>
              <h3>Santexnik</h3>
              <span>Kecha • Samarqand</span>
            </div>

            <span className="status success">
              Tugallandi
            </span>
          </div>

          <div className="order-item">
            <div>
              <h3>Uy tozalash</h3>
              <span>25-iyun • Andijon</span>
            </div>

            <span className="status waiting">
              Kutilmoqda
            </span>
          </div>

        </div>

        {/* Favorite Masters */}

        <div className="dashboard-card">

          <div className="card-header">
            <h2>Sevimli Ustalar</h2>
          </div>

          <div className="master-item">
            <img src="https://i.pravatar.cc/60?img=12" alt="" />

            <div>
              <h3>Akmal Elektrik</h3>
              <span>⭐ 4.9</span>
            </div>
          </div>

          <div className="master-item">
            <img src="https://i.pravatar.cc/60?img=15" alt="" />

            <div>
              <h3>Sardor Santexnik</h3>
              <span>⭐ 5.0</span>
            </div>
          </div>

          <div className="master-item">
            <img src="https://i.pravatar.cc/60?img=18" alt="" />

            <div>
              <h3>Javohir Quruvchi</h3>
              <span>⭐ 4.8</span>
            </div>
          </div>

        </div>

      </section>

      {/* Quick Actions */}

      <section className="quick-actions">

        <button>⚡ Elektrik</button>

        <button>🚿 Santexnik</button>

        <button>🧹 Tozalash</button>

        <button>🏠 Uy Ta'mirlash</button>

      </section>

      {/* Notifications */}

      <section className="dashboard-card">

        <div className="card-header">
          <h2>So'nggi Bildirishnomalar</h2>
        </div>

        <div className="notification">
          ✅ Buyurtmangiz usta tomonidan qabul qilindi.
        </div>

        <div className="notification">
          ⭐ Akmal Elektrik sizga javob yubordi.
        </div>

        <div className="notification">
          🎁 Siz uchun yangi chegirmalar mavjud.
        </div>

      </section>

    </main>
  );
};

export default ClientDashboard;