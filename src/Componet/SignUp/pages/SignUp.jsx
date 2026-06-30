import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "client",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRole = (role) => {
    setFormData({
      ...formData,
      role,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Parollar mos emas!");
      return;
    }

    localStorage.setItem(
      "ustatop-user",
      JSON.stringify(formData)
    );

    alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");

    if (formData.role === "client") {
      navigate("/client");
    } else {
      navigate("/pro");
    }
  };

  return (
    <div className="signup-pageaa">
      <div className="signup-card">

        <div className="signup-logo">
          <h1>UstaTop</h1>
          <p>Create your account</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+998 90 123 45 67"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="role-section">
            <h4>Select Role</h4>

            <div className="role-buttons">

              <button
                type="button"
                className={formData.role === "client" ? "active" : ""}
                onClick={() => handleRole("client")}
              >
                👤 Client
              </button>

              <button
                type="button"
                className={formData.role === "pro" ? "active" : ""}
                onClick={() => handleRole("pro")}
              >
                🔧 Pro
              </button>

            </div>
          </div>

          <button className="signup-btn" type="submit">
            Create Account
          </button>

        </form>

        <div className="signin-link">
          Already have an account?
          <Link to="/signin"> Sign In</Link>
        </div>

      </div>
    </div>
  );
};

export default SignUp;