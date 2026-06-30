import React from "react";
import "./ClientSettings.css";

const ClientSettings = () => {
  return (
    <main className="settings-page">

      {/* Header */}

      <section className="settings-header">

        <h1>⚙️ Settings</h1>

        <p>
          Profilingiz va hisobingiz sozlamalarini shu yerdan boshqaring.
        </p>

      </section>

      {/* Profile */}

      <section className="settings-card">

        <h2>Profile Information</h2>

        <div className="profile-box">

          <img
            src="https://i.pravatar.cc/200?img=12"
            alt="profile"
          />

          <button>Change Photo</button>

        </div>

        <div className="input-grid">

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              defaultValue="Otabek Abdullayev"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              defaultValue="otabek@gmail.com"
            />
          </div>

          <div className="input-group">
            <label>Phone</label>
            <input
              type="text"
              defaultValue="+998 90 123 45 67"
            />
          </div>

          <div className="input-group">
            <label>Location</label>
            <input
              type="text"
              defaultValue="Toshkent"
            />
          </div>

        </div>

      </section>

      {/* Password */}

      <section className="settings-card">

        <h2>Change Password</h2>

        <div className="input-group">
          <label>Current Password</label>
          <input type="password" />
        </div>

        <div className="input-group">
          <label>New Password</label>
          <input type="password" />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input type="password" />
        </div>

      </section>

      {/* Preferences */}

      <section className="settings-card">

        <h2>Preferences</h2>

        <div className="setting-item">
          <span>🔔 Push Notifications</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="setting-item">
          <span>🌙 Dark Mode</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="setting-item">
          <span>📧 Email Notifications</span>
          <input type="checkbox" />
        </div>

      </section>

      {/* Buttons */}

      <section className="settings-actions">

        <button className="save-btn">
          Save Changes
        </button>

        <button className="logout-btn">
          Logout
        </button>

      </section>

    </main>
  );
};

export default ClientSettings;