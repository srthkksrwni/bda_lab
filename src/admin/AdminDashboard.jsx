import { useEffect, useState } from "react";
import { DASHBOARD_API } from "../api/dashboardApi";

function AdminDashboard() {
  const [stats, setStats] = useState({
    funding: 0,
    events: 0,
    messages: 0,
    people: 0,
    publications: 0,
    blogs: 0,
  });

  useEffect(() => {
    fetch(DASHBOARD_API.stats)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats({
            funding: data.data.funding,
            events: data.data.events,
            messages: data.data.messages,
            people: data.data.people || 0,
            publications: data.data.publications || 0,
            blogs: data.data.blogs || 0,
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to BDA Lab Admin Panel</p>

      <div className="dashboard-cards">
        <div className="dash-card">
          Funding & Collaboration
          <span>{stats.funding}</span>
        </div>

        <div className="dash-card">
          People
          <span>{stats.people}</span>
        </div>

        <div className="dash-card">
          Publications
          <span>{stats.publications}</span>
        </div>

        <div className="dash-card">
          Events
          <span>{stats.events}</span>
        </div>

        <div className="dash-card">
          Blogs
          <span>{stats.blogs}</span>
        </div>

        <div className="dash-card">
          Messages
          <span>{stats.messages}</span>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;