import { useState, useEffect } from "react";
import "./AdminStudents.css";
import { PEOPLE_API } from "../peopleApi";
import { API_BASE } from "../../../api/apiConfig";

function AdminStudents() {
  const categories = [
    { id: "postdoc", label: "Post-Doctorate" },
    { id: "phd", label: "PhD Scholars" },
    { id: "graduated", label: "Graduated PhD" },
    { id: "mtech", label: "M.Tech Scholars" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("postdoc");
  const [batchYear, setBatchYear] = useState("2025");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [students, setStudents] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    imageLink: "",
    scholarLink: "",
    profileLink: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedExts = ["jpg", "jpeg", "png", "webp"];
      const ext = file.name.split(".").pop().toLowerCase();
      if (!allowedExts.includes(ext)) {
        alert("Only JPG, JPEG, PNG, and WEBP image files are allowed.");
        e.target.value = "";
        return;
      }
      if (file.size > 5242880) {
        alert("Image file size exceeds the 5MB limit.");
        e.target.value = "";
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const fetchStudents = async () => {
    try {
      const url = selectedCategory === "mtech"
        ? `${PEOPLE_API.list}?type=students&category=${selectedCategory}&batch_year=${batchYear}`
        : `${PEOPLE_API.list}?type=students&category=${selectedCategory}`;
      const response = await fetch(url);
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
          batchYear: item.batch_year || "",
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
  }, [selectedCategory, batchYear]);

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
    setSelectedFile(null);
    setPreviewUrl("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("type", "student");
    formData.append("category", selectedCategory);
    formData.append("name", form.name);
    formData.append("email", form.email || "");
    formData.append("research_topic", form.topic || "");
    formData.append("scholar_url", form.scholarLink || "");
    formData.append("profile_url", form.profileLink || "");
    if (selectedCategory === "mtech") {
      formData.append("batch_year", batchYear);
    } else {
      formData.append("batch_year", "");
    }

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    if (editId) {
      formData.append("id", editId);
    }

    try {
      const url = editId ? PEOPLE_API.update : PEOPLE_API.add;
      const response = await fetch(url, {
        method: "POST",
        body: formData,
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
    if (selectedCategory === "mtech" && item.batchYear) {
      setBatchYear(item.batchYear.toString());
    }
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

  {selectedCategory === "mtech" && (
    <div className="category-box">
      <label>Batch Year</label>

      <select
        value={batchYear}
        onChange={(e) => setBatchYear(e.target.value)}
      >
        <option value="2030">2030</option>
        <option value="2029">2029</option>
        <option value="2028">2028</option>
        <option value="2027">2027</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
      </select>
    </div>
  )}

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

        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        {(previewUrl || form.imageLink) && (
          <div style={{ padding: "5px 0" }}>
            <img
              src={previewUrl || (form.imageLink.startsWith("http") ? form.imageLink : `${API_BASE}/${form.imageLink}`)}
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
            src={item.imageLink.startsWith("http") ? item.imageLink : `${API_BASE}/${item.imageLink}`}
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
