import { useState } from "react";
import "./FundingCollaboration.css";

function FundingCollaboration() {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [fundings, setFundings] = useState([
    {
      id: 1,
      name: "IIIT Allahabad",
      logo: "https://picsum.photos/120?random=1",
    },
    {
      id: 2,
      name: "Council of Science & Technology, U.P.",
      logo: "https://picsum.photos/120?random=2",
    },
    {
      id: 3,
      name: "AICTE",
      logo: "https://picsum.photos/120?random=3",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    logo: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setForm({
        ...form,
        logo: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setFundings(
        fundings.map((item) =>
          item.id === editId ? { ...item, ...form } : item
        )
      );
      setEditId(null);
    } else {
      const newId =
        fundings.length > 0
          ? Math.max(...fundings.map((item) => item.id)) + 1
          : 1;

      setFundings([
        ...fundings,
        {
          id: newId,
          ...form,
        },
      ]);
    }

    setForm({ name: "", logo: "" });
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      logo: item.logo,
    });

    setEditId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this item?")) {
      setFundings(fundings.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="funding-page">
      <div className="funding-top">
        <h1>Funding & Collaboration</h1>

        <button onClick={() => setShowForm(true)}>+ Add</button>
      </div>

      {showForm && (
        <div className="funding-form-box">
          <h2>{editId ? "Edit Item" : "Add Item"}</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input type="file" accept="image/*" onChange={handleImageChange} />

            {form.logo && (
              <img
                src={form.logo}
                alt="Preview"
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            )}

            <div className="form-actions">
              <button type="submit">{editId ? "Update" : "Save"}</button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setShowForm(false);
                  setEditId(null);
                  setForm({ name: "", logo: "" });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="funding-table">
        <div className="table-head">
          <span>ID</span>
          <span>Logo</span>
          <span>Name</span>
          <span>Action</span>
        </div>

        {fundings.map((item) => (
          <div className="table-row" key={item.id}>
            <span>{item.id}</span>

            <span>
              <img src={item.logo} alt={item.name} />
            </span>

            <span>{item.name}</span>

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
      </div>
    </div>
  );
}

export default FundingCollaboration;