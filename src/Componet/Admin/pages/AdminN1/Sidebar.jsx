import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AppProviders";
import "./Sidebar.css";

const menuItems = [
  { label: "Dashboard", icon: "◉", path: "/admin" },
  { label: "Users", icon: "◌", path: "/admin/users" },
  { label: "Masters", icon: "⚙", path: "/admin/masters" },
  { label: "Operations", icon: "▣", path: "/admin/operations" },
  { label: "Payments", icon: "◍", path: "/admin" },
  { label: "Analytics", icon: "◐", path: "/admin" },
  { label: "Reviews", icon: "★", path: "/admin" },
  { label: "Reports", icon: "◑", path: "/admin" },
  { label: "Settings", icon: "⚒", path: "/admin" },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">U</div>
        <div>
          <h2>UstaTop</h2>
          <p>Admin Suite</p>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Sidebar navigation">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item logout" type="button" onClick={handleLogout}>
          <span className="nav-icon">⇢</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
