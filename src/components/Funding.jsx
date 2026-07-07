import React, { useEffect, useState } from "react";
import "../styles/funding.css";
import { FUNDING_API } from "../api/fundingApi";
import { API_BASE } from "../api/apiConfig";

function Funding() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch(FUNDING_API.list)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setPartners(data.fundings);
        }
      })
      .catch((error) => {
        console.error("Error fetching funding partners:", error);
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
                {partner.logo && (
                  <img
                    src={`${API_BASE}/${partner.logo}`}
                    alt={partner.partner_name}
                    className="partner-img"
                    loading="lazy"
                  />
                )}
              </div>

              <p>{partner.partner_name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Funding;