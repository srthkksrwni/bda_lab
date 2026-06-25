import { useState } from "react";
import "./AdminStudents.css";

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

const [students, setStudents] = useState({
postdoc: [
{
id: 1,
name: "Dr. Sadhana Tiwari",
email: "[sadhana@iiita.ac.in](mailto:sadhana@iiita.ac.in)",
topic: "Data Analytics and Artificial Intelligence",
imageLink: "",
scholarLink: "https://scholar.google.com",
profileLink: "https://example.com",
},
],


phd: [
  {
    id: 1,
    name: "Himanshi Singh",
    email: "rsi2026003@iiita.ac.in",
    topic:
      "Multimodal Analysis for Mental Disorder Recognition",
    imageLink: "",
    scholarLink: "https://scholar.google.com",
    profileLink: "",
  },
  {
    id: 2,
    name: "Sonam Yadav",
    email: "rsi2024503@iiita.ac.in",
    topic:
      "Uncertainty-aware Concept Drift Management Framework",
    imageLink: "",
    scholarLink: "",
    profileLink: "",
  },
],

graduated: [
  {
    id: 1,
    name: "Dr. Amit Kumar",
    email: "amit@gmail.com",
    topic: "Graduated PhD Scholar",
    imageLink: "",
    scholarLink: "",
    profileLink: "",
  },
],

mtech: [
  {
    id: 1,
    name: "Sarang Mohrir",
    email: "sarang@gmail.com",
    topic:
      "Statistical Distance-Based Techniques for Real-Time Concept Drift Detection",
    imageLink: "",
    scholarLink: "",
    profileLink: "",
  },
],


});

const [form, setForm] = useState({
name: "",
email: "",
topic: "",
imageLink: "",
scholarLink: "",
profileLink: "",
});

const resetForm = () => {
setForm({
name: "",
email: "",
topic: "",
imageLink: "",
scholarLink: "",
profileLink: "",
});
};

const handleSubmit = (e) => {
e.preventDefault();


const currentList = students[selectedCategory];

if (editId) {
  const updatedList = currentList.map((item) =>
    item.id === editId ? { ...item, ...form } : item
  );

  setStudents({
    ...students,
    [selectedCategory]: updatedList,
  });

  setEditId(null);
} else {
  const newId =
    currentList.length > 0
      ? Math.max(...currentList.map((item) => item.id)) + 1
      : 1;

  setStudents({
    ...students,
    [selectedCategory]: [
      ...currentList,
      {
        id: newId,
        ...form,
      },
    ],
  });
}

resetForm();
setShowForm(false);

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

const handleDelete = (id) => {
if (window.confirm("Delete this student?")) {
setStudents({
...students,
[selectedCategory]: students[selectedCategory].filter(
(item) => item.id !== id
),
});
}
};

return ( <div className="events-page"> <div className="events-top"> <h1>Students</h1>


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
    <div className="event-form-box">
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

        <div className="form-actions">
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

  <div className="events-table">
    <div className="table-head">
      <span>ID</span>
      <span>Name</span>
      <span>Email</span>
      <span>Action</span>
    </div>

    {students[selectedCategory].map((item) => (
      <div className="table-row" key={item.id}>
        <span>{item.id}</span>

        <span>
          <strong>{item.name}</strong>
          <br />
          {item.topic}
        </span>

        <span>
          {item.email}

          {item.scholarLink && (
            <>
              <br />
              <small>Scholar ✓</small>
            </>
          )}

          {item.profileLink && (
            <>
              <br />
              <small>Profile ✓</small>
            </>
          )}

          {item.imageLink && (
            <>
              <br />
              <small>Image ✓</small>
            </>
          )}
        </span>

        <span>
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

    {students[selectedCategory].length === 0 && (
      <p className="empty-text">
        No students added in this category.
      </p>
    )}
  </div>
</div>


);
}

export default AdminStudents;
