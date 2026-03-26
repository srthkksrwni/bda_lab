import React from "react";
import "../styles/ResourcePage.css";
import {workstations , hardwareList} from "../data/resources";

const ResourcesPage = () => {
  return (
    <div className="resources-wrapper">
      <h1 className="resources-title">LAB RESOURCES</h1>

      {/* WORKSTATIONS TABLE */}
      <section className="resources-section">
        <h2>COMPUTER WORKSTATIONS</h2>
        <table className="resource-table">
          <thead>
            <tr><th>#</th><th>Item</th><th>Description</th><th>Qty</th></tr>
          </thead>
          <tbody>
            {workstations.map((w) => (
              <tr key={w.id}>
                <td>{w.id}</td>
                <td>{w.item}</td>
                <td>{w.desc}</td>
                <td>{w.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* HARDWARE TABLE */}
        <h2 style={{ marginTop: '40px' }}>SPECIALIZED HARDWARE & SENSORS</h2>
        <table className="resource-table">
          <thead>
            <tr><th>#</th><th>Item</th><th>Make/Model/Description</th><th>Qty</th></tr>
          </thead>
          <tbody>
            {hardwareList.map((h) => (
              <tr key={h.id}>
                <td>{h.id}</td>
                <td>{h.item}</td>
                <td>{h.desc}</td>
                <td>{h.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};


export default ResourcesPage;
