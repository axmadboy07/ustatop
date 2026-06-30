import { useState } from "react";
import "./Client.css";

/* ── USER ── */
const USER = {
  name: "Nodir Akramov",
  email: "client@ustatop.uz",
};

/* ── ORDERS ── */
const INITIAL_ORDERS = [
  {
    id: "UT-2048",
    category: "Elektrik",
    name: "Rozetka qizib ketmoqda",
    location: "Toshkent, Chilonzor 12-kvartal",
    date: "2026-02-02 18:00",
    service: "Rozetka va avtomat almashtirish",
    usta: "Javlon Karimov",
    total: 240000,
    status: "yakunlandi",
  },
  {
    id: "UT-2047",
    category: "Santexnik",
    name: "Rakovina ostidan suv oqyapti",
    location: "Toshkent, Yunusobod 7",
    date: "2026-02-03 09:30",
    service: "Suv oqishini tuzatish",
    usta: "Murod Sobirov",
    total: 180000,
    status: "kutilmoqda",
  },
];

/* ── MODAL STYLE ── */
const modal = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    backdropFilter: "blur(6px)",
  },
  box: {
    background: "linear-gradient(145deg, #141d29, #0f1722)",
    padding: "22px",
    borderRadius: "18px",
    width: "420px",
    maxWidth: "95%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "700",
  },
  close: {
    background: "transparent",
    border: "none",
    color: "#94a3b8",
    fontSize: "18px",
    cursor: "pointer",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    color: "#94a3b8",
    fontSize: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "#0b1220",
    color: "#fff",
  },
  btns: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  cancelBtn: {
    flex: 1,
    padding: "10px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
  },
  submitBtn: {
    flex: 1,
    padding: "10px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(90deg,#00c2ff,#7c3aed)",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
  },
};

/* ── MODAL COMPONENT ── */
function NewOrderModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    category: "Elektrik",
    name: "",
    location: "",
    date: "",
    service: "",
    usta: "",
    total: "",
  });

  const categories = [
    "Elektrik",
    "Santexnik",
    "Klinning",
    "Ta'mirlash",
    "Konditsioner",
    "Dizayn",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.usta || !form.total) return;

    const newOrder = {
      ...form,
      id: "UT-" + Math.floor(1000 + Math.random() * 9000),
      total: Number(form.total),
      status: "kutilmoqda",
    };

    onAdd(newOrder);
    onClose();
  };

  return (
    
    <div style={modal.overlay} onClick={onClose}>
      <div style={modal.box} onClick={(e) => e.stopPropagation()}>
        <div style={modal.header}>
          <h3 style={modal.title}>Yangi buyurtma</h3>
          <button style={modal.close} onClick={onClose}>✕</button>
        </div>
        {[
          { label: "Buyurtma nomi", name: "name" },
          { label: "Joylashuv", name: "location" },
          { label: "Sana va vaqt", name: "date" },
          { label: "Xizmat", name: "service" },
          { label: "Usta ismi", name: "usta" },
          { label: "Jami summa", name: "total" },
        ].map((f) => (
          <div key={f.name} style={modal.field}>
            <label style={modal.label}>{f.label}</label>
            <input
              style={modal.input}
              name={f.name}
              value={form[f.name]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div style={modal.field}>
          <label style={modal.label}>Kategoriya</label>
          <select
            style={modal.input}
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div style={modal.btns}>
          <button style={modal.cancelBtn} onClick={onClose}>
            Bekor qilish
          </button>
          <button style={modal.submitBtn} onClick={handleSubmit}>
            Qo'shish
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── ORDER ROW ── */
function OrderRow({ order, onChat }) {
  return (
    <div className="cl-order-row">
      <div className="cl-order-left">
        <div className="cl-order-id">
          {order.id} - {order.category}
        </div>
        <div className="cl-order-name">{order.name}</div>
        <div className="cl-order-meta">
          {order.location} - {order.date}
        </div>
        <div className="cl-order-service">{order.service}</div>
      </div>

      <div className="cl-order-divider" />

      <div className="cl-order-right">
        <div className="cl-order-usta-name">{order.usta}</div>
        <div className="cl-order-total">
          Jami: {Number(order.total).toLocaleString()} so'm
        </div>

        <div className="cl-order-actions">
          <button className={`cl-status-btn ${order.status}`}>
            {order.status === "yakunlandi" ? "Yakunlandi" : "Kutilmoqda"}
          </button>

          <button
            className="cl-action-chat"
            onClick={() => onChat(order)}
          >
            Chat
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── MAIN ── */
export default function Client() {
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [showModal, setShowModal] = useState(false);

  const activeCount = orders.filter((o) => o.status === "kutilmoqda").length;
  const doneCount = orders.filter((o) => o.status === "yakunlandi").length;

  const escrow = orders
    .filter((o) => o.status === "kutilmoqda")
    .reduce((sum, o) => sum + Number(o.total || 0), 0);

  const addOrder = (order) =>
    setOrders((prev) => [...prev, order]);

  const handleChat = (order) => {
    alert(`${order.usta} bilan chat (${order.id})`);
  };

  return (
    <div className="cl-page">
      <div className="cl-header">
        
        <div>
           <div className="dashboard">
           <h1>Dashboard</h1>
         </div>
        
          <h1>Mijoz buyurtmalari</h1>
          <p>{USER.name} - {USER.email}</p>
        </div>

        <div>
          <button className="cl-btn-chat">Chat</button>
          <button className="cl-btn-settings">Settings</button>
        </div>
      </div>

      <div className="cl-stats">
        <div className="cl-stat-card purple">
          <div>Faol buyurtmalar</div>
          <div>{activeCount}</div>
        </div>

        <div className="cl-stat-card blue">
          <div>Escrow</div>
          <div>{escrow.toLocaleString()} so'm</div>
        </div>

        <div className="cl-stat-card dark">
          <div>Yakunlangan</div>
          <div>{doneCount}</div>
        </div>
      </div>

      <div className="cl-orders-wrap">
        <div className="cl-orders-head">
          <h2>Buyurtmalar</h2>
          <button
            className="cl-btn-new"
            onClick={() => setShowModal(true)}
          >
            Yangi buyurtma
          </button>
        </div>

        {orders.map((o) => (
          <OrderRow key={o.id} order={o} onChat={handleChat} />
        ))}
      </div>

      {showModal && (
        <NewOrderModal
          onClose={() => setShowModal(false)}
          onAdd={addOrder}
        />
      )}
    </div>
  );
}