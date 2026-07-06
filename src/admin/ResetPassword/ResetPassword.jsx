import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Admin.css";

import { API_BASE } from "../../api/apiConfig";

const API = API_BASE;

export default function ResetPassword() {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const email = localStorage.getItem("resetEmail");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email not verified. Please try again.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch(`${API}/auth/reset_password.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          newPassword,
        }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.removeItem("resetEmail");
        alert("Password reset successfully.");
        navigate("/admin/login");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="admin-login-page">
      <form className="admin-login-box" onSubmit={handleResetPassword}>
        <h2>Reset Password</h2>

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Reset Password</button>

        <div className="admin-link">
          <Link to="/admin/login">← Back to Login</Link>
        </div>

        {message && <p className="login-message">{message}</p>}
      </form>
    </div>
  );
}