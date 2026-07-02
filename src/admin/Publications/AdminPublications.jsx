import { useEffect, useState } from "react";
import "./AdminPublications.css";
import PublicationStatsCard from "./PublicationStatsCard";
import { PUBLICATIONS_API } from "../../api/publicationsApi";

function AdminPublications() {
  const [publications, setPublications] = useState([]);
  const [category, setCategory] = useState("journals");
  const [year, setYear] = useState(new Date().getFullYear());
  const [citation, setCitation] = useState("");
  const [link, setLink] = useState("");
  const [editId, setEditId] = useState(null);
  const [statsRefresh, setStatsRefresh] = useState(0);
  const [showForm, setShowForm] = useState(false);

  // API_URL managed via PUBLICATIONS_API

  const fetchPublications = async () => {
    const response = await fetch(PUBLICATIONS_API.list);
    const data = await response.json();

    if (data.success) {
      setPublications(data.publications);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  const resetForm = () => {
    setCategory("journals");
    setYear(new Date().getFullYear());
    setCitation("");
    setLink("");
    setEditId(null);
  };

  const savePublication = async () => {
    if (!category || !year || !citation) {
      alert("Please fill category, year and citation");
      return;
    }

    const url = editId ? PUBLICATIONS_API.update : PUBLICATIONS_API.add;

    const body = editId
      ? { id: editId, category, year, citation, link }
      : { category, year, citation, link };

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
      setShowForm(false);
      fetchPublications();
      setStatsRefresh((prev) => prev + 1);
    } else {
      alert("Operation failed");
    }
  };

  const editPublication = (publication) => {
    setEditId(publication.id);
    setCategory(publication.category);
    setYear(publication.year);
    setCitation(publication.citation);
    setLink(publication.link || "");
    setShowForm(true);
  };

  const deletePublication = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    const response = await fetch(PUBLICATIONS_API.delete, {
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
      setStatsRefresh((prev) => prev + 1);
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
      <div className="publications-header">
        <h1>Publications</h1>

        {!showForm && (
          <button
            className="add-publication-btn"
            onClick={() => setShowForm(true)}
          >
            + Add Publication
          </button>
        )}
      </div>

      {showForm && (
        <div className="admin-publications-form">
          <h2>{editId ? "Update Publication" : "Add Publication"}</h2>

          <div className="form-group">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="journals">Transactions & Journals</option>
              <option value="conferences">Conference Publications</option>
              <option value="books">Books</option>
            </select>
          </div>

          <div className="form-group">
            <label>Publication Year</label>
            <input
              type="number"
              placeholder="e.g. 2026"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Publication Citation</label>
            <textarea
              placeholder="Enter publication citation"
              value={citation}
              onChange={(e) => setCitation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Publication Link</label>
            <input
              type="text"
              placeholder="Optional Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div className="admin-publications-buttons">
            <button onClick={savePublication}>
              {editId ? "Update Publication" : "Save Publication"}
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <PublicationStatsCard refresh={statsRefresh} />

      <table className="admin-publications-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Year</th>
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
              <td>{publication.year}</td>
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
              <td colSpan="6" className="no-data">
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