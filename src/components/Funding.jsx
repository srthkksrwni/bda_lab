import React, { useEffect, useState } from "react";
import "../styles/funding.css";

function Funding() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/funding/list.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPartners(data.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching funding partners:", error);
      });
  }, []);

  return (
    <section id="funding" className="funding-section">
      <div className="section-header">
        <h2 className="section-title">Funding & Collaboration</h2>
        <div className="title-underline"></div>
        <p className="funding-subtext">
          Our research is powered by <span>strategic grants</span> and{" "}
          <span>global partnerships</span>.
        </p>
      </div>

      <div className="funding-container">
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card animate-slide">
              <div className="logo-wrapper">
                <img
                  src={partner.logo}
                  alt={partner.partner_name}
                  className="partner-img"
                />
              </div>

              <p>{partner.partner_name}</p>
            </div>
          ))}

          {partners.length === 0 && <p>No funding partners found.</p>}
        </div>
      </div>
    </section>
  );
}

export default Funding;