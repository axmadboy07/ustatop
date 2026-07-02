import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <label className="search-box" aria-label="Search">
        <span>⌕</span>
        <input type="text" placeholder="Search anything" />
      </label>

      <div className="navbar-actions">
        <button className="icon-btn" aria-label="Notifications">🔔</button>
        <button className="icon-btn" aria-label="Messages">✉</button>
        <div className="user-pill">
          <div className="avatar">A</div>
          <div>
            <h3>Akmal Karimov</h3>
            <p>Online</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
