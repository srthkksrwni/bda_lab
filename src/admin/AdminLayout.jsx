import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Admin.css";

const API = "http://localhost/bda_lab/backend";

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch(`${API}/auth/logout.php`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.log("Logout error:", error);
    }

    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminUser");
    localStorage.removeItem("resetEmail");

    navigate("/admin/login");
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>BDA Admin</h2>

        <nav>
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/funding">Funding & Collaboration</Link>
          <Link to="/admin/people">People</Link>
          <Link to="/admin/publications">Publications</Link>
          <Link to="/admin/research-updates">Research Updates</Link>
          <Link to="/admin/events">Events</Link>
          <Link to="/admin/blogs">Blogs</Link>
          <Link to="/admin/contact-messages">Contact Messages</Link>

          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </nav>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;