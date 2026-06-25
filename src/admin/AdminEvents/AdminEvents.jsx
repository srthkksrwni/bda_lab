import { useState } from "react";
import "./AdminEvents.css";

function AdminEvents() {
  const categories = [
    { id: "conferences", label: "International Conferences" },
    { id: "corporate", label: "Corporate Training" },
    { id: "gian", label: "GIAN Courses" },
    { id: "tutorials", label: "Tutorials" },
    { id: "workshop", label: "Workshops" },
    { id: "awards", label: "Awards" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("conferences");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [events, setEvents] = useState({
    conferences: [
      {
        id: 1,
        title:
          'Sonali Agarwal (General Chair), "16th Innovations in Software Engineering Conference (ISEC 2023)." Organized under ACM India.',
        year: "2023",
      },
      {
        id: 2,
        title:
          'Sonali Agarwal (General Chair), "29th International Conference on Neural Information Processing (ICONIP 2022)." Supported by APNNS Society.',
        year: "2022",
      },
      {
        id: 3,
        title:
          'Sonali Agarwal (General Chair), "9th International Conference on Big Data Analytics (BDA 2021)." Self-Sponsored.',
        year: "2021",
      },
      {
        id: 4,
        title:
          'Sonali Agarwal (General Chair), "2nd International Conference on Machine Intelligence and Signal Processing (MISP 2019)." Multi-agency Funding.',
        year: "2019",
      },
    ],
    corporate: [],
    gian: [],
    tutorials: [],
    workshop: [],
    awards: [],
  });

  const [form, setForm] = useState({
    title: "",
    year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentList = events[selectedCategory];

    if (editId) {
      const updatedList = currentList.map((item) =>
        item.id === editId ? { ...item, ...form } : item
      );

      setEvents({
        ...events,
        [selectedCategory]: updatedList,
      });

      setEditId(null);
    } else {
      const newId =
        currentList.length > 0
          ? Math.max(...currentList.map((item) => item.id)) + 1
          : 1;

      setEvents({
        ...events,
        [selectedCategory]: [
          ...currentList,
          {
            id: newId,
            ...form,
          },
        ],
      });
    }

    setForm({ title: "", year: "" });
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setForm({
      title: item.title,
      year: item.year,
    });

    setEditId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this event?")) {
      setEvents({
        ...events,
        [selectedCategory]: events[selectedCategory].filter(
          (item) => item.id !== id
        ),
      });
    }
  };

  return (
    <div className="events-page">
      <div className="events-top">
        <h1>Events</h1>

        <button onClick={() => setShowForm(true)}>+ Add Event</button>
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
          <h2>{editId ? "Edit Event" : "Add Event"}</h2>

          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Event Title / Description"
              value={form.title}
              required
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <input
              type="text"
              placeholder="Year"
              value={form.year}
              required
              onChange={(e) => setForm({ ...form, year: e.target.value })}
            />

            <div className="form-actions">
              <button type="submit">
                {editId ? "Update Event" : "Save Event"}
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setShowForm(false);
                  setEditId(null);
                  setForm({ title: "", year: "" });
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
          <span>Title</span>
          <span>Year</span>
          <span>Action</span>
        </div>

        {events[selectedCategory].map((item) => (
          <div className="table-row" key={item.id}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.year}</span>
            <span>
              <button className="edit-btn" onClick={() => handleEdit(item)}>
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

        {events[selectedCategory].length === 0 && (
          <p className="empty-text">No events added in this category.</p>
        )}
      </div>
    </div>
  );
}

export default AdminEvents;