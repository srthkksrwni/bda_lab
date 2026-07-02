import { useEffect, useState } from "react";
import "./AdminEvents.css";
import { EVENTS_API } from "../../api/eventsApi";

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
    conferences: [],
    corporate: [],
    gian: [],
    tutorials: [],
    workshop: [],
    awards: [],
  });

  const [form, setForm] = useState({
    citation: "",
    link: "",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(EVENTS_API.list);
      const data = await response.json();

      if (data.success) {
        const grouped = {
          conferences: [],
          corporate: [],
          gian: [],
          tutorials: [],
          workshop: [],
          awards: [],
        };

        data.data.forEach((item) => {
          if (grouped[item.category_id]) {
            grouped[item.category_id].push(item);
          }
        });

        setEvents(grouped);
      }
    } catch (error) {
      console.log("Error fetching events:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedCat = categories.find((cat) => cat.id === selectedCategory);

    const eventData = {
      id: editId,
      category_id: selectedCategory,
      category_label: selectedCat.label,
      citation: form.citation,
      link: form.link,
    };

    const url = editId ? EVENTS_API.update : EVENTS_API.add;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      const data = await response.json();

      if (data.success) {
        alert(
          editId
            ? "Event updated successfully."
            : "Event added successfully."
        );

        setForm({ citation: "", link: "" });
        setEditId(null);
        setShowForm(false);
        fetchEvents();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Error saving event:", error);
      alert("Server error.");
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setForm({
      citation: item.citation,
      link: item.link || "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this event?");

    if (!confirmDelete) return;

    try {
      const response = await fetch(`${EVENTS_API.delete}?id=${id}`);
      const data = await response.json();

      if (data.success) {
        alert("Event deleted successfully.");
        fetchEvents();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Error deleting event:", error);
      alert("Server error.");
    }
  };

  return (
    <div className="events-page">
      <div className="events-top">
        <h1>Events</h1>

        <button
          onClick={() => {
            setEditId(null);
            setForm({ citation: "", link: "" });
            setShowForm(true);
          }}
        >
          + Add Event
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
            setForm({ citation: "", link: "" });
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
              placeholder="Event citation / description"
              value={form.citation}
              required
              onChange={(e) => setForm({ ...form, citation: e.target.value })}
            />

            <input
              type="text"
              placeholder="Optional Link"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
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
                  setForm({ citation: "", link: "" });
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
          <span>Citation</span>
          <span>Link</span>
          <span>Action</span>
        </div>

        {events[selectedCategory].map((item, index) => (
          <div className="table-row" key={item.id}>
            <span>{index + 1}</span>
            <span>{item.citation}</span>
            <span>{item.link ? item.link : "No link"}</span>

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