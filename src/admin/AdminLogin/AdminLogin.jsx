import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Admin.css";

import { ADMIN_API } from "../../api/adminapi";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [otp, setOtp] = useState("");
  const [adminId, setAdminId] = useState(null);
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch(ADMIN_API.checkSession, {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();

        if (data.success) {
          navigate("/admin/dashboard");
        }
      } catch (error) {
        console.log("Session check failed:", error);
      }
    };

    checkLogin();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(ADMIN_API.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success && data.otp_required) {
        setAdminId(data.admin_id);
        setShowOtpBox(true);
        setMessage("Verification code sent to admin email.");
      } else {
        setMessage(data.message || "Invalid login details");
      }
    } catch (error) {
      setMessage("Login failed. Check API connection.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(ADMIN_API.verifyLoginOtp, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          admin_id: adminId,
          otp,
        }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("adminLoggedIn", "true");
        navigate("/admin/dashboard");
      } else {
        setMessage(data.message || "Invalid verification code");
      }
    } catch (error) {
      setMessage("OTP verification failed.");
    }
  };

  return (
    <div className="admin-login-page">
      {!showOtpBox ? (
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

          <button type="submit">Send Verification Code</button>

          <div className="admin-link">
            <Link to="/admin/forgot-password">Forgot Password...?</Link>
          </div>

          {message && <p className="login-message">{message}</p>}
        </form>
      ) : (
        <form className="admin-login-box" onSubmit={handleVerifyOtp}>
          <h2>Enter Verification Code</h2>

          <input
            type="text"
            placeholder="Enter 6-digit code"
            value={otp}
            maxLength="6"
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button type="submit">Verify & Login</button>

          <div className="admin-link">
            <button
              type="button"
              onClick={() => {
                setShowOtpBox(false);
                setOtp("");
                setAdminId(null);
              }}
            >
              ← Back to Login
            </button>
          </div>

          {message && <p className="login-message">{message}</p>}
        </form>
      )}
    </div>
  );
}