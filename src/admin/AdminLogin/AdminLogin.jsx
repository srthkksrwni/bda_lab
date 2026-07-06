import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Admin.css";

const API = "http://localhost/bda_lab/backend";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/auth/login.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        navigate("/admin/dashboard");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Login failed. Check API connection.");
    }
  };

  return (
    <div className="admin-login-page">
      <form className="admin-login-box" onSubmit={handleLogin}>
        <h2>BDA Lab Admin Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username or Email"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <div className="admin-link">
          <Link to="/admin/forgot-password">Forgot Password?</Link>
        </div>

        {message && <p className="login-message">{message}</p>}
      </form>
    </div>
  );
}