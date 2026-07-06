import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ADMIN_API } from "../../api/adminapi";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch(ADMIN_API.checkSession, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthenticated(data.success);
        setLoading(false);
      })
      .catch(() => {
        setAuthenticated(false);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}