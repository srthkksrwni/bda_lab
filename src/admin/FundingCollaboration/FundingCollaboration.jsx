import { useEffect, useState } from "react";
import "./FundingCollaboration.css";
import { FUNDING_API } from "../../api/fundingApi";

function FundingCollaboration() {

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [fundings, setFundings] = useState([]);

  const [form, setForm] = useState({
    partner_name: "",
    logo: "",
  });

  useEffect(() => {
    fetchFundings();
  }, []);

  const fetchFundings = async () => {
    const response = await fetch(FUNDING_API.list);
    const data = await response.json();

    if (data.success) {
      setFundings(data.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editId ? FUNDING_API.update : FUNDING_API.add;

    const fundingData = {
      id: editId,
      partner_name: form.partner_name,
      logo: form.logo,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fundingData),
    });

    const data = await response.json();

    if (data.success) {
      alert(editId ? "Updated successfully." : "Added successfully.");
      setForm({ partner_name: "", logo: "" });
      setEditId(null);
      setShowForm(false);
      fetchFundings();
    } else {
      alert(data.message);
    }
  };

  const handleEdit = (item) => {
    setForm({
      partner_name: item.partner_name,
      logo: item.logo,
    });

    setEditId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;

    const response = await fetch(`${FUNDING_API.delete}?id=${id}`);
    const data = await response.json();

    if (data.success) {
      alert("Deleted successfully.");
      fetchFundings();
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="funding-page">
      <div className="funding-top">
        <h1>Funding & Collaboration</h1>

        <button
          onClick={() => {
            setEditId(null);
            setForm({ partner_name: "", logo: "" });
            setShowForm(true);
          }}
        >
          + Add
        </button>
      </div>

      {showForm && (
        <div className="funding-form-box">
          <h2>{editId ? "Edit Item" : "Add Item"}</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Partner Name"
              value={form.partner_name}
              required
              onChange={(e) =>
                setForm({ ...form, partner_name: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Logo filename e.g. fund1.jpg"
              value={form.logo}
              required
              onChange={(e) => setForm({ ...form, logo: e.target.value })}
            />

            {form.logo && (
              <img
                src={form.logo}
                alt="Preview"
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "contain",
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
                  setForm({ partner_name: "", logo: "" });
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

        {fundings.map((item, index) => (
          <div className="table-row" key={item.id}>
            <span>{index + 1}</span>

            <span>
              <img src={item.logo} alt={item.partner_name} />
            </span>

            <span>{item.partner_name}</span>

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

        {fundings.length === 0 && (
          <p className="empty-text">No funding partners found.</p>
        )}
      </div>
    </div>
  );
}

export default FundingCollaboration;