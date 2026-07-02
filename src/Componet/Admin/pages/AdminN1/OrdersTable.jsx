import React from "react";
import "./OrdersTable.css";

const orders = [
  { customer: "Nodir", master: "Ali", service: "Plumbing", price: "$120", date: "24 Jun", status: "Pending" },
  { customer: "Sardor", master: "Bek", service: "Electrical", price: "$220", date: "22 Jun", status: "Completed" },
  { customer: "Mina", master: "Jasur", service: "Cleaning", price: "$90", date: "20 Jun", status: "Working" },
  { customer: "Dilshod", master: "Otabek", service: "Painting", price: "$160", date: "19 Jun", status: "Cancelled" },
];

const OrdersTable = () => {
  return (
    <section className="panel table-panel">
      <div className="panel-heading">
        <div>
          <p className="panel-kicker">Operations</p>
          <h2>Latest Orders</h2>
        </div>
        <button className="ghost-btn">Export</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Master</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={`${order.customer}-${order.date}`}>
                <td>{order.customer}</td>
                <td>{order.master}</td>
                <td>{order.service}</td>
                <td>{order.price}</td>
                <td>{order.date}</td>
                <td><span className={`status-pill ${order.status.toLowerCase()}`}>{order.status}</span></td>
                <td><button className="table-action">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrdersTable;
