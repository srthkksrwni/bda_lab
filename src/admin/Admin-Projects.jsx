import { useState } from "react";
import "./Admin-Projects.css";

function Projects() {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "MODEST",
      status: "Active",
      date: "24 June 2026",
    },
    {
      id: 2,
      title: "Health Monitoring Project",
      status: "Active",
      date: "22 June 2026",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    status: "Active",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setProjects(
        projects.map((project) =>
          project.id === editId ? { ...project, ...form } : project
        )
      );
      setEditId(null);
    } else {
      setProjects([
        ...projects,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    setForm({
      title: "",
      status: "Active",
      date: "",
    });

    setShowForm(false);
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      status: project.status,
      date: project.date,
    });

    setEditId(project.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this project?");

    if (confirmDelete) {
      setProjects(projects.filter((project) => project.id !== id));
    }
  };

  return (
    <div className="projects-page">
      <div className="projects-top">
        <h1>Projects</h1>

        <button onClick={() => setShowForm(true)}>
          + Add Project
        </button>
      </div>

      {showForm && (
        <div className="project-form-box">
          <h2>{editId ? "Edit Project" : "Add Project"}</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Project Title"
              value={form.title}
              required
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />

            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option>Active</option>
              <option>Completed</option>
              <option>Upcoming</option>
            </select>

            <input
              type="text"
              placeholder="Date"
              value={form.date}
              required
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <div className="form-actions">
              <button type="submit">
                {editId ? "Update Project" : "Save Project"}
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setShowForm(false);
                  setEditId(null);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="projects-table">
        <div className="table-head">
          <span>Title</span>
          <span>Status</span>
          <span>Date</span>
          <span>Action</span>
        </div>

        {projects.map((project) => (
          <div className="table-row" key={project.id}>
            <span>{project.title}</span>
            <span className="active">{project.status}</span>
            <span>{project.date}</span>
            <span>
              <button
                className="edit-btn"
                onClick={() => handleEdit(project)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(project.id)}
              >
                Delete
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;