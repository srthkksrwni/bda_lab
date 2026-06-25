import { Link, Outlet } from "react-router-dom";
import "./Admin.css";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>BDA Admin</h2>

        <nav>
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/admin-project">Projects</Link>
          <Link to="/admin/faculty">Faculty</Link>
          <Link to="/admin/publications">Publications</Link>
          <Link to="/admin/research-updates">Research Updates</Link>
          <Link to="/admin/events">Events</Link>
          <Link to="/admin/blogs">Blogs</Link>
          <Link to="/admin/contact-messages">Contact Messages</Link>
        </nav>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;