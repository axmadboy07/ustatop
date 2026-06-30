import React from "react";
import "./Client.css";

const Client = () => {
  return (
    <main className="client-home">

      {/* Hero */}

      <section className="client-hero">

        <div className="client-hero-text">

          <span className="client-badge">
            👋 Assalomu alaykum
          </span>

          <h1>
            Bugun qanday xizmat kerak?
          </h1>

          <p>
            Minglab ishonchli ustalar orasidan o'zingizga mos
            mutaxassisni toping va bir necha daqiqada buyurtma bering.
          </p>

        </div>

        <div className="client-search">

          <input
            type="text"
            placeholder="Elektrik, Santexnik, Quruvchi..."
          />

          <button>
            Qidirish
          </button>

        </div>

      </section>

      {/* Categories */}

      <section className="client-category">

        <h2>Ommabop xizmatlar</h2>

        <div className="category-grid">

          <div className="category-card">
            ⚡
            <span>Elektrik</span>
          </div>

          <div className="category-card">
            🚿
            <span>Santexnik</span>
          </div>

          <div className="category-card">
            🎨
            <span>Bo'yoqchi</span>
          </div>

          <div className="category-card">
            🧱
            <span>Quruvchi</span>
          </div>

          <div className="category-card">
            ❄️
            <span>Konditsioner</span>
          </div>

          <div className="category-card">
            🧹
            <span>Tozalash</span>
          </div>

        </div>

      </section>

      {/* Top Masters */}

<section className="top-masters">

    <div className="section-header">

        <h2>Top Ustalar</h2>

        <button>Hammasini ko'rish</button>

    </div>

    <div className="masters-grid">

        <div className="master-card">

            <img
                src="https://i.pravatar.cc/300?img=12"
                alt=""
            />

            <h3>Akmal Elektrik</h3>

            <p>Elektrik • 6 yillik tajriba</p>

            <div className="master-info">

                <span>⭐ 4.9</span>

                <span>127 ta ish</span>

            </div>

            <button>Profilni ko'rish</button>

        </div>

        <div className="master-card">

            <img
                src="https://i.pravatar.cc/300?img=15"
                alt=""
            />

            <h3>Sardor Santexnik</h3>

            <p>Santexnik • 8 yillik tajriba</p>

            <div className="master-info">

                <span>⭐ 5.0</span>

                <span>203 ta ish</span>

            </div>

            <button>Profilni ko'rish</button>

        </div>

        <div className="master-card">

            <img
                src="https://i.pravatar.cc/300?img=18"
                alt=""
            />

            <h3>Javohir Quruvchi</h3>

            <p>Quruvchi • 12 yillik tajriba</p>

            <div className="master-info">

                <span>⭐ 4.8</span>

                <span>315 ta ish</span>

            </div>

            <button>Profilni ko'rish</button>

        </div>

    </div>

</section>

      {/* Masters */}

      <section className="client-master">

        <div className="section-title">
          <h2>Tavsiya etilgan ustalar</h2>
        </div>

        <div className="master-grid">

          <div className="master-card">
            <h3>Akmal Elektrik</h3>
            <p>⭐ 4.9</p>
            <span>Toshkent</span>
          </div>

          <div className="master-card">
            <h3>Sardor Santexnik</h3>
            <p>⭐ 5.0</p>
            <span>Samarqand</span>
          </div>

          <div className="master-card">
            <h3>Javohir Quruvchi</h3>
            <p>⭐ 4.8</p>
            <span>Andijon</span>
          </div>

        </div>

      </section>

    </main>
  );
};

export default Client;