import { useState, useEffect } from "react";
import "./AdminFaculty.css";
import { PEOPLE_API } from "../peopleApi";

function AdminFaculty() {
  const [faculty, setFaculty] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    designation: "",
    email: "",
    image_url: "",
    scholar_url: "",
    profile_url: "",
    description: "",
    external_links: [],
  });

  const fetchFaculty = async () => {
    try {
      const response = await fetch(`${PEOPLE_API.list}?type=faculty`);
      const data = await response.json();
      if (data.success) {
        setFaculty(data.data || []);
      } else {
        console.error("Failed to load faculty:", data.message);
      }
    } catch (error) {
      console.error("Error fetching faculty:", error);
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const resetForm = () => {
    setForm({
      name: "",
      designation: "",
      email: "",
      image_url: "",
      scholar_url: "",
      profile_url: "",
      description: "",
      external_links: [],
    });
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      type: "faculty",
      name: form.name,
      designation: form.designation,
      email: form.email,
      image_url: form.image_url,
      scholar_url: form.scholar_url,
      profile_url: form.profile_url,
      description: form.description,
      external_links: form.external_links,
    };

    if (editId) {
      payload.id = editId;
    }

    try {
      const url = editId ? PEOPLE_API.update : PEOPLE_API.add;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success) {
        resetForm();
        setShowForm(false);
        fetchFaculty();
      } else {
        alert(data.message || "Operation failed");
      }
    } catch (error) {
      console.error("Error saving faculty:", error);
      alert("Error connecting to server");
    }
  };

  const handleEdit = (item) => {
    let links = [];
    if (item.external_links) {
      if (typeof item.external_links === "string") {
        try {
          links = JSON.parse(item.external_links);
        } catch (e) {
          links = [];
        }
      } else if (Array.isArray(item.external_links)) {
        links = item.external_links;
      }
    }
    setForm({
      name: item.name || "",
      designation: item.designation || "",
      email: item.email || "",
      image_url: item.image_url || "",
      scholar_url: item.scholar_url || "",
      profile_url: item.profile_url || "",
      description: item.description || "",
      external_links: links,
    });
    setEditId(item.id);
    setShowForm(true);
  };

  const handleAddLink = () => {
    setForm({
      ...form,
      external_links: [...form.external_links, { title: "", url: "" }],
    });
  };

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...form.external_links];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    setForm({
      ...form,
      external_links: updatedLinks,
    });
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = form.external_links.filter((_, i) => i !== index);
    setForm({
      ...form,
      external_links: updatedLinks,
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this faculty member?")) {
      try {
        const response = await fetch(PEOPLE_API.delete, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "faculty",
            id: id,
          }),
        });

        const data = await response.json();
        if (data.success) {
          fetchFaculty();
        } else {
          alert(data.message || "Delete failed");
        }
      } catch (error) {
        console.error("Error deleting faculty:", error);
        alert("Error connecting to server");
      }
    }
  };

  return (
    <div>
      <div className="top-bar">
        <div></div>

        <button
          className="add-btn"
          onClick={() => {
            resetForm();
            setEditId(null);
            setShowForm(true);
          }}
        >
          + Add Faculty
        </button>
      </div>

      {showForm && (
        <form className="faculty-form" onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={form.name}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Designation"
            value={form.designation}
            required
            onChange={(e) => setForm({ ...form, designation: e.target.value })}
          />

          <input
            placeholder="Image URL"
            value={form.image_url}
            onChange={(e) => setForm({ ...form, image_url: e.target.value })}
          />

          {form.image_url && (
            <div style={{ padding: "5px 0" }}>
              <img
                src={form.image_url}
                alt="Preview"
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  border: "1px solid #ddd"
                }}
              />
            </div>
          )}

          <input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            placeholder="Google Scholar URL"
            value={form.scholar_url}
            onChange={(e) => setForm({ ...form, scholar_url: e.target.value })}
          />

          <input
            placeholder="Profile URL"
            value={form.profile_url}
            onChange={(e) => setForm({ ...form, profile_url: e.target.value })}
          />

          <textarea
            placeholder="Description"
            value={form.description || ""}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={4}
          />

          <div className="external-links-section">
            <h3 className="external-links-title">External Links</h3>
            {form.external_links && form.external_links.map((link, idx) => (
              <div key={idx} className="link-row">
                <input
                  placeholder="Link Title (e.g. CIR Lab)"
                  value={link.title || ""}
                  onChange={(e) => handleLinkChange(idx, "title", e.target.value)}
                  required
                />
                <input
                  placeholder="Link URL"
                  value={link.url || ""}
                  onChange={(e) => handleLinkChange(idx, "url", e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="remove-link-btn"
                  onClick={() => handleRemoveLink(idx)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-link-btn"
              onClick={handleAddLink}
            >
              + Add Link
            </button>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit">
              {editId ? "Update Faculty" : "Save Faculty"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                resetForm();
              }}
              style={{
                background: "#6c757d",
                color: "white"
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <table className="admin-table">
        <thead>
          <tr>
            <th>Image Preview</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Description</th>
            <th>Email</th>
            <th>External Links</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {faculty.map((item) => (
            <tr key={item.id}>
              <td>
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "1px solid #ddd"
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#e9ecef",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      color: "#6c757d"
                    }}
                  >
                    No Pic
                  </div>
                )}
              </td>
              <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>
                <div style={{
                  maxWidth: "200px",
                  maxHeight: "60px",
                  overflowY: "auto",
                  fontSize: "13px",
                  lineHeight: "1.4",
                  whiteSpace: "pre-wrap"
                }} title={item.description}>
                  {item.description || <span style={{ color: "#aaa" }}>—</span>}
                </div>
              </td>
              <td>{item.email}</td>
              <td>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {(() => {
                    let links = [];
                    if (item.external_links) {
                      if (typeof item.external_links === "string") {
                        try {
                          links = JSON.parse(item.external_links);
                        } catch (e) {
                          links = [];
                        }
                      } else if (Array.isArray(item.external_links)) {
                        links = item.external_links;
                      }
                    }
                    return links.length > 0 ? (
                      links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: "12px",
                            color: "#24317c",
                            textDecoration: "underline",
                            wordBreak: "break-all"
                          }}
                        >
                          {link.title || link.url}
                        </a>
                      ))
                    ) : (
                      <span style={{ color: "#aaa", fontSize: "12px" }}>None</span>
                    );
                  })()}
                </div>
              </td>
              <td>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    onClick={() => handleEdit(item)}
                    style={{
                      padding: "6px 12px",
                      background: "#24317c",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer"
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      padding: "6px 12px",
                      background: "#dc3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer"
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {faculty.length === 0 && (
        <p className="empty-text">No faculty members found.</p>
      )}
    </div>
  );
}

export default AdminFaculty;