import { useEffect, useState } from "react";
import "./AdminPublications.css";

function AdminPublications() {
  const [publications, setPublications] = useState([]);
  const [category, setCategory] = useState("journals");
  const [citation, setCitation] = useState("");
  const [link, setLink] = useState("");
  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost/bda_lab/backend/publications";

  const fetchPublications = async () => {
    try {
      const response = await fetch(`${API_URL}/list.php`);
      const data = await response.json();

      if (data.success) {
        setPublications(data.publications);
      }
    } catch (error) {
      console.error("Error fetching publications:", error);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  const resetForm = () => {
    setCategory("journals");
    setCitation("");
    setLink("");
    setEditId(null);
  };

  const savePublication = async () => {
    if (!category || !citation) {
      alert("Please select category and enter citation");
      return;
    }

    const url = editId ? `${API_URL}/update.php` : `${API_URL}/add.php`;

    const body = editId
      ? { id: editId, category, citation, link }
      : { category, citation, link };

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
        alert(editId ? "Publication updated" : "Publication added");
        resetForm();
        fetchPublications();
      } else {
        alert("Operation failed");
      }
    } catch (error) {
      console.error("Error saving publication:", error);
      alert("Something went wrong");
    }
  };

  const editPublication = (publication) => {
    setEditId(publication.id);
    setCategory(publication.category);
    setCitation(publication.citation);
    setLink(publication.link || "");
  };

  const deletePublication = async (id) => {
    if (!window.confirm("Are you sure you want to delete this publication?")) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/delete.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Publication deleted");
        fetchPublications();
      } else {
        alert("Failed to delete publication");
      }
    } catch (error) {
      console.error("Error deleting publication:", error);
      alert("Something went wrong");
    }
  };

  const getCategoryLabel = (value) => {
    if (value === "journals") return "Transactions & Journals";
    if (value === "conferences") return "Conference Publications";
    if (value === "books") return "Books";
    return value;
  };

  return (
    <div className="admin-publications-container">
      <h1>Publications</h1>

      <div className="admin-publications-form">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="journals">Transactions & Journals</option>
          <option value="conferences">Conference Publications</option>
          <option value="books">Books</option>
        </select>

        <textarea
          placeholder="Enter publication citation"
          value={citation}
          onChange={(e) => setCitation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Publication link (optional)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <button onClick={savePublication}>
          {editId ? "Update Publication" : "+ Add Publication"}
        </button>

        {editId && <button onClick={resetForm}>Cancel</button>}
      </div>

      <table className="admin-publications-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Citation</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {publications.map((publication, index) => (
            <tr key={publication.id}>
              <td>{index + 1}</td>
              <td>{getCategoryLabel(publication.category)}</td>
              <td>{publication.citation}</td>
              <td>
                {publication.link ? (
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                ) : (
                  "No link"
                )}
              </td>
              <td>
                <div className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => editPublication(publication)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deletePublication(publication.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {publications.length === 0 && (
            <tr>
              <td colSpan="5" className="no-data">
                No publications found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPublications;