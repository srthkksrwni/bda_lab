import { useEffect, useState } from "react";
import "./FundingCollaboration.css";
import { FUNDING_API } from "../../api/fundingApi";
import { API_BASE } from "../../api/apiConfig";

function FundingCollaboration() {
  const [fundings, setFundings] = useState([]);
  const [partnerName, setPartnerName] = useState("");
  const [logo, setLogo] = useState(null);
  const [editId, setEditId] = useState(null);

  const fetchFundings = async () => {
    try {
      const response = await fetch(FUNDING_API.list);
      const data = await response.json();

      if (data.success) {
        setFundings(data.fundings || data.data || []);
      }
    } catch (error) {
      console.error("Error fetching funding partners:", error);
    }
  };

  useEffect(() => {
    fetchFundings();
  }, []);

  const resetForm = () => {
    setPartnerName("");
    setLogo(null);
    setEditId(null);
  };

  const saveFunding = async () => {
    if (!partnerName) {
      alert("Please enter partner name");
      return;
    }

    if (!logo) {
      alert("Please upload logo");
      return;
    }

    const formData = new FormData();
    formData.append("partner_name", partnerName);
    formData.append("logo", logo);

    if (editId) {
      formData.append("id", editId);
    }

    const apiUrl = editId ? FUNDING_API.update : FUNDING_API.add;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert(editId ? "Funding updated successfully" : "Funding added successfully");
        resetForm();
        fetchFundings();
      } else {
        alert(data.message || "Operation failed");
      }
    } catch (error) {
      console.error("Error saving funding:", error);
      alert("Something went wrong");
    }
  };

  const editFunding = (item) => {
    setEditId(item.id);
    setPartnerName(item.partner_name);
    setLogo(null);
  };

  const deleteFunding = async (id) => {
    if (!window.confirm("Are you sure you want to delete this funding partner?")) return;

    try {
      const response = await fetch(FUNDING_API.delete, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Funding deleted successfully");
        fetchFundings();
      } else {
        alert(data.message || "Failed to delete funding");
      }
    } catch (error) {
      console.error("Error deleting funding:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="funding-page">
      <div className="funding-top">
        <h1>Funding & Collaboration</h1>
      </div>

      <div className="funding-form-box">
        <input
          type="text"
          placeholder="Partner Name"
          value={partnerName}
          onChange={(e) => setPartnerName(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setLogo(e.target.files[0])}
        />

        <button onClick={saveFunding}>
          {editId ? "Update Funding" : "+ Add Funding"}
        </button>

        {editId && (
          <button type="button" className="cancel-btn" onClick={resetForm}>
            Cancel
          </button>
        )}
      </div>

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
              <img
                src={`${API_BASE}/${item.logo}`}
                alt={item.partner_name}
              />
            </span>

            <span>{item.partner_name}</span>

            <span>
              <button className="edit-btn" onClick={() => editFunding(item)}>
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteFunding(item.id)}
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