import { useState } from "react";
import "./AdminFaculty.css";

function AdminFaculty() {
  const [faculty, setFaculty] = useState([]);

  const [form, setForm] = useState({
    name: "",
    designation: "",
    image: "",
    email: "",
    scholarLink: "",
    profileLink: ""
  });

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFaculty([
      ...faculty,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      name: "",
      designation: "",
      image: "",
      email: "",
      scholarLink: "",
      profileLink: "",
    });

    setShowForm(false);
  };

  return (
    <div>
      <div className="top-bar">
        <button onClick={() => setShowForm(true)}>
          + Add Faculty
        </button>
      </div>

      {showForm && (
        <form className="faculty-form" onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Designation"
            value={form.designation}
            onChange={(e) =>
              setForm({
                ...form,
                designation: e.target.value,
              })
            }
          />

          <input
            placeholder="Image URL"
            value={form.image}
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            placeholder="Google Scholar Link"
            value={form.scholarLink}
            onChange={(e) =>
              setForm({
                ...form,
                scholarLink: e.target.value,
              })
            }
          />

          <input
            placeholder="Profile Link"
            value={form.profileLink}
            onChange={(e) =>
              setForm({
                ...form,
                profileLink: e.target.value,
              })
            }
          />

          <button type="submit">
            Save Faculty
          </button>
        </form>
      )}

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {faculty.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminFaculty;