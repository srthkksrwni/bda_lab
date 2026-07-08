import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Admin.css";

import { API_BASE } from "../../api/apiConfig";

const API = API_BASE;

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${API}/auth/forgot_password.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("resetEmail", email);
        alert("Verification code sent to admin email.");
        navigate("/admin/reset-password");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="admin-login-page">
      <form className="admin-login-box" onSubmit={handleSendOtp}>
        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Send Verification Code</button>

        <div className="admin-link">
          <Link to="/admin/login">← Back to Login</Link>
        </div>

        {message && <p className="login-message">{message}</p>}
      </form>
    </div>
  );
}