import { useEffect, useState } from "react";
import "./AdminResearchUpdates.css";
import { RESEARCH_API } from "../api/researchApi";

function AdminResearchUpdates() {
  const [updates, setUpdates] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchUpdates = async () => {
    try {
      const response = await fetch(RESEARCH_API.list);
      const data = await response.json();

      if (data.success) {
        setUpdates(data.updates);
      }
    } catch (error) {
      console.error("Error fetching updates:", error);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  const resetForm = () => {
    setTitle("");
    setYear("");
    setEditId(null);
  };

  const saveUpdate = async () => {
    if (!title || !year) {
      alert("Please fill all fields");
      return;
    }

    const url = editId ? RESEARCH_API.update : RESEARCH_API.add;
    const body = editId ? { id: editId, title, year } : { title, year };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (data.success) {
        alert(editId ? "Research update updated" : "Research update added");
        resetForm();
        fetchUpdates();
      } else {
        alert("Operation failed");
      }
    } catch (error) {
      console.error("Error saving update:", error);
      alert("Something went wrong");
    }
  };

  const editUpdate = (update) => {
    setEditId(update.id);
    setTitle(update.title);
    setYear(update.year);
  };

  const deleteUpdate = async (id) => {
    if (!window.confirm("Are you sure you want to delete this update?")) {
      return;
    }

    try {
      const response = await fetch(RESEARCH_API.delete, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Research update deleted");
        fetchUpdates();
      } else {
        alert("Failed to delete research update");
      }
    } catch (error) {
      console.error("Error deleting update:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="research-container">
      <h1>Research Updates</h1>

      <div className="research-form">
        <input
          type="text"
          placeholder="Enter research update title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Year e.g. 2026"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button onClick={saveUpdate}>
          {editId ? "Update Research Update" : "+ Add Research Update"}
        </button>

        {editId && <button onClick={resetForm}>Cancel</button>}
      </div>

      <table className="research-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {updates.map((update) => (
            <tr key={update.id}>
              <td>{update.id}</td>
              <td>{update.title}</td>
              <td>{update.year}</td>
              <td>
                <div className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => editUpdate(update)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteUpdate(update.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminResearchUpdates;