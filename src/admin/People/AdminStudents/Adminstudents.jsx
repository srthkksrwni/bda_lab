import { useState, useEffect } from "react";
import "./AdminStudents.css";
import { PEOPLE_API } from "../peopleApi";

function AdminStudents() {
  const categories = [
    { id: "postdoc", label: "Post-Doctorate" },
    { id: "phd", label: "PhD Scholars" },
    { id: "graduated", label: "Graduated PhD" },
    { id: "mtech", label: "M.Tech Scholars" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("postdoc");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    imageLink: "",
    scholarLink: "",
    profileLink: "",
  });

  const fetchStudents = async () => {
    try {
      const response = await fetch(
        `${PEOPLE_API.list}?type=students&category=${selectedCategory}`
      );
      const data = await response.json();
      if (data.success) {
        const mapped = (data.data || []).map((item) => ({
          id: item.id,
          name: item.name,
          email: item.email,
          topic: item.research_topic || "",
          imageLink: item.image_url || "",
          scholarLink: item.scholar_url || "",
          profileLink: item.profile_url || "",
        }));
        setStudents(mapped);
      } else {
        console.error("Failed to load students:", data.message);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [selectedCategory]);

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      topic: "",
      imageLink: "",
      scholarLink: "",
      profileLink: "",
    });
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      type: "student",
      category: selectedCategory,
      name: form.name,
      email: form.email,
      research_topic: form.topic,
      image_url: form.imageLink,
      scholar_url: form.scholarLink,
      profile_url: form.profileLink,
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
        fetchStudents();
      } else {
        alert(data.message || "Operation failed");
      }
    } catch (error) {
      console.error("Error saving student:", error);
      alert("Error connecting to server");
    }
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name || "",
      email: item.email || "",
      topic: item.topic || "",
      imageLink: item.imageLink || "",
      scholarLink: item.scholarLink || "",
      profileLink: item.profileLink || "",
    });
    setEditId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this student?")) {
      try {
        const response = await fetch(PEOPLE_API.delete, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "student",
            id: id,
          }),
        });

        const data = await response.json();
        if (data.success) {
          fetchStudents();
        } else {
          alert(data.message || "Delete failed");
        }
      } catch (error) {
        console.error("Error deleting student:", error);
        alert("Error connecting to server");
      }
    }
  };

return ( 
<div className="students-container"> <div className="top-bar"> <h1>Students</h1>


    <button
      onClick={() => {
        resetForm();
        setEditId(null);
        setShowForm(true);
      }}
    >
      + Add Student
    </button>
  </div>

  <div className="category-box">
    <label>Category</label>

    <select
      value={selectedCategory}
      onChange={(e) => {
        setSelectedCategory(e.target.value);
        setShowForm(false);
        setEditId(null);
      }}
    >
      {categories.map((cat) => (
        <option key={cat.id} value={cat.id}>
          {cat.label}
        </option>
      ))}
    </select>
  </div>

  {showForm && (
    <div className="student-form">
      <h2>
        {editId ? "Edit Student" : "Add Student"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={form.name}
          required
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          required
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Research Area / Thesis / Project"
          value={form.topic}
          onChange={(e) =>
            setForm({
              ...form,
              topic: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Image URL (Optional)"
          value={form.imageLink}
          onChange={(e) =>
            setForm({
              ...form,
              imageLink: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Google Scholar Link (Optional)"
          value={form.scholarLink}
          onChange={(e) =>
            setForm({
              ...form,
              scholarLink: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Portfolio/Profile Link (Optional)"
          value={form.profileLink}
          onChange={(e) =>
            setForm({
              ...form,
              profileLink: e.target.value,
            })
          }
        />

        <div className="form-buttons">
          <button type="submit">
            {editId
              ? "Update Student"
              : "Save Student"}
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => {
              setShowForm(false);
              setEditId(null);
              resetForm();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )}

  <div className="students-table">
  <div className="students-head">
    <span>Image Preview</span>
    <span>Name</span>
    <span>Research / Thesis</span>
    <span>Email</span>
    <span>Actions</span>
  </div>

  {students.map((item) => (
    <div className="students-row" key={item.id}>
      {/* Image Preview */}
      <span className="preview-cell">
        {item.imageLink ? (
          <img
            src={item.imageLink}
            alt={item.name}
            className="student-preview"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}

        <div
          className="no-image"
          style={{
            display: item.imageLink ? "none" : "flex",
          }}
        >
          No Pic
        </div>
      </span>

      {/* Name */}
      <span>
        <strong>{item.name}</strong>

        {(item.scholarLink || item.profileLink) && (
          <div className="student-links">
            {item.scholarLink && (
              <small className="tag scholar-tag">
                Scholar ✓
              </small>
            )}

            {item.profileLink && (
              <small className="tag profile-tag">
                Profile ✓
              </small>
            )}
          </div>
        )}
      </span>

      {/* Research Topic */}
      <span>
        {item.topic || (
          <span className="empty-value">
            —
          </span>
        )}
      </span>

      {/* Email */}
      <span>
        {item.email}
      </span>

      {/* Actions */}
      <span className="action-buttons">
        <button
          className="edit-btn"
          onClick={() => handleEdit(item)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
      </span>
    </div>
  ))}

  {students.length === 0 && (
    <p className="empty-text">
      No students added in this category.
    </p>
  )}
</div>
</div>


);
}

export default AdminStudents;
