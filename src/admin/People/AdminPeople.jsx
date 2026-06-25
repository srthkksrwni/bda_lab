import { useState } from "react";
import "./AdminPeople.css";

import AdminFaculty from "./AdminFaculty/AdminFaculty";
import AdminStudents from "./AdminStudents/AdminStudents";

function AdminPeople() {
  const [activeTab, setActiveTab] = useState("faculty");

  return (
    <div className="people-page">
      <div className="people-header">
        <h1>People</h1>
      </div>

      <div className="people-tabs">
        <button
          className={activeTab === "faculty" ? "active" : ""}
          onClick={() => setActiveTab("faculty")}
        >
          Faculty
        </button>

        <button
          className={activeTab === "students" ? "active" : ""}
          onClick={() => setActiveTab("students")}
        >
          Students
        </button>
      </div>

      {activeTab === "faculty" ? (
        <AdminFaculty />
      ) : (
        <AdminStudents />
      )}
    </div>
  );
}

export default AdminPeople;