import React from "react";
import "./AdminLayout.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Navbar />
        <div className="admin-page-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
