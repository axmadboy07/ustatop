import React from "react";
import { Link } from "react-router-dom";
import "./UsersPage.css";
import AdminLayout from "./AdminLayout";

const users = [
  { name: "Nodir Qodirov", email: "nodir@mail.com", role: "Client", status: "Active", joined: "12 Jun" },
  { name: "Malika Karimova", email: "malika@mail.com", role: "Client", status: "Pending", joined: "10 Jun" },
  { name: "Jasur Turgunov", email: "jasur@mail.com", role: "Admin", status: "Active", joined: "8 Jun" },
];

const UsersPage = () => {
  return (
    <AdminLayout>
      <main className="page-shell">
        <section className="hero-panel compact">
          <div>
            <p className="eyebrow">User Management</p>
            <h1>Manage clients and platform users with clarity.</h1>
            <p>Track account activity, review access levels, and keep the community healthy.</p>
          </div>
          <Link to="/admin" className="ghost-btn">Back to Dashboard</Link>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Accounts</p>
              <h2>Recent Users</h2>
            </div>
            <button className="ghost-btn">Add user</button>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td><span className={`status-pill ${user.status.toLowerCase()}`}>{user.status}</span></td>
                    <td>{user.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </AdminLayout>
  );
};

export default UsersPage;
