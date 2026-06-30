import React, { useState } from "react";
import "./Market.css"
const categories = [
  "Hammasi",
  "Santexnik",
  "Elektrik",
  "Usta",
  "Qorovul",
  "Haydovchi",
];

const sortOptions = [
  "Tavsiya etilgan",
  "Reyting bo'yicha",
  "Narx bo'yicha",
  "Tez javob",
];

const Marketplace = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Hammasi");
  const [sort, setSort] = useState("Tavsiya etilgan");

  return (
    <section className="wrapper">
      <div className="accent-bar"></div>

      <div className="container">
        <div className="header-row">
          <div className="left-content">
            <span className="eyebrow">MARKETPLACE</span>

            <h1 className="heading">
              Verified ustalarni toping va <br />
              real buyurtma yarating.
            </h1>

            <p className="subtext">
              Kategoriya, reyting, javob tezligi va narx bo'yicha saralang.
              Buyurtma yaratilganda Telegram xabarnoma ishlaydi.
            </p>
          </div>

          <div className="right-content">
            <button className="dashboard-btn">
              Dashboardga o'tish
            </button>
          </div>
        </div>

        <div className="search-row">
          <div className="search-input-wrap">
            <svg
              className="search-icon"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="6"
                stroke="#888"
                strokeWidth="1.8"
              />

              <path
                d="M13.5 13.5L17 17"
                stroke="#888"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <input
              className="search-input"
              type="text"
              placeholder="Xizmat, usta yoki shahar bo'yicha qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="select-wrap">
            <select
              className="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <svg
              className="chevron"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="#ccc"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="select-wrap">
            <select
              className="select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              {sortOptions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <svg
              className="chevron"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="#ccc"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Marketplace;