import { useEffect, useState } from "react";
import "./AdminResearchUpdates.css";

function AdminResearchUpdates() {
  const [updates, setUpdates] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const API_URL = "http://localhost/bda_lab/backend/research_updates";

  const fetchUpdates = async () => {
    try {
      const response = await fetch(`${API_URL}/list.php`);
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

  const addUpdate = async () => {
    if (!title || !year || !type) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/add.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, year, type }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Research update added successfully");
        setTitle("");
        setYear("");
        setType("");
        fetchUpdates();
      } else {
        alert("Failed to add research update");
      }
    } catch (error) {
      console.error("Error adding update:", error);
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

        <input
          type="text"
          placeholder="Type e.g. Publication"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <button onClick={addUpdate}>+ Add Research Update</button>
      </div>

      <table className="research-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {updates.map((update) => (
            <tr key={update.id}>
              <td>{update.title}</td>
              <td>{update.year}</td>
              <td>{update.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminResearchUpdates;