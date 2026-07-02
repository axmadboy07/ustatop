import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="home-Container">

        <div className="home-logo">
          <h1>UstaTop</h1>
        </div>

        <div className="home-h2">
          <h2>
            Haqiqiy ishlaydigan professional xizmatlar marketplace.
          </h2>
        </div>

        <div className="home-p">
          <p>
            UstaTop - bu sizning ehtiyojlaringizni qondirish uchun professional
            xizmatlarni topish va ulardan foydalanish imkonini beruvchi onlayn
            platformadir. Bizning maqsadimiz sizga eng yaxshi xizmatlarni
            taqdim etish va sizning vaqt hamda resurslaringizni tejashdir.
          </p>
        </div>

        <div className="home-input">
          <input
            type="text"
            placeholder="Masalan, elektrik, suv oqishi, uy ta'mirlash"
          />
        </div>

        <div className="home-btn">

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
          >
            Marketplace ochish
          </button>

          <button
            type="button"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>

        </div>

      </div>
    </div>
  );
};

export default Home;