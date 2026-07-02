import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo Login

    if (email === "client@ustatop.uz" && password === "123456") {
      navigate("/client");
      return;
    }

    if (email === "pro@ustatop.uz" && password === "123456") {
      navigate("/pro");
      return;
    }

    if (email === "admin@ustatop.uz" && password === "123456") {
      navigate("/admin");
      return;
    }

    // SignUp orqali ro'yxatdan o'tgan foydalanuvchi
    const user = JSON.parse(localStorage.getItem("ustatop-user"));

    if (!user) {
      alert("Foydalanuvchi topilmadi!");
      return;
    }

    if (user.email !== email || user.password !== password) {
      alert("Email yoki parol noto'g'ri!");
      return;
    }

    if (user.role === "client") {
      navigate("/client");
    } else {
      navigate("/pro");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">

        <h1 className="signin-title">UstaTop</h1>
        <p className="signin-subtitle">Welcome Back</p>

        <form className="signin-form" onSubmit={handleLogin}>

          <div className="signin-input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email kiriting"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="signin-input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Parol kiriting"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="signin-btn" type="submit">
            Sign In
          </button>

        </form>

        <div className="signin-demo">
          <h3>Demo Accounts</h3>

          <div className="demo-card">
            <strong>👤 Client</strong>
            <p>Email: client@ustatop.uz</p>
            <p>Password: 123456</p>
          </div>

          <div className="demo-card">
            <strong>🔧 Pro</strong>
            <p>Email: pro@ustatop.uz</p>
            <p>Password: 123456</p>
          </div>

          <div className="demo-card">
            <strong>🛡️ Admin</strong>
            <p>Email: admin@ustatop.uz</p>
            <p>Password: 123456</p>
          </div>
        </div>

        <div className="signin-footer">
          <span>Hisobingiz yo'qmi? </span>
          <Link to="/signup">Sign Up</Link>
        </div>

      </div>
    </div>
  );
};

export default SignIn;