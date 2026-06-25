function AdminDashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to BDA Lab Admin Panel</p>

      <div className="dashboard-cards">
        <div className="dash-card">admin-project <span>12</span></div>
        <div className="dash-card">People <span>8</span></div>
        <div className="dash-card">Publications <span>45</span></div>
        <div className="dash-card">Events <span>6</span></div>
        <div className="dash-card">Blogs <span>10</span></div>
        <div className="dash-card">Messages <span>3</span></div>
      </div>
    </div>
  );
}

export default AdminDashboard;