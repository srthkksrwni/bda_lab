import React from "react";
import "../styles/funding.css";

const partners = [
  { id: 1, name: "DST India", logo: "fund1.jpg" },
  { id: 2, name: "i Hub Divyasampark", logo: "fund2.png" },
  { id: 3, name: "CSIR India", logo: "fund3.jpg" },
  { id: 4, name: "Ministry of Education", logo: "fund4.png" },
  { id: 5, name: "IIIT Allahabad", logo: "fund5.jpg" },
  { id: 6, name: "ISRO", logo: "fund6.png" },
  { id: 7, name: "ASEAN India", logo: "fund7.jpg" },
  { id: 8, name: "ERASMUS", logo: "fund8.png" },
  { id: 9, name: "UBL Jakarta", logo: "fund9.png" },
  { id: 10, name: "ICMR", logo: "fund10.png" },
  { id: 11, name: "CST-UP", logo: "fund11.jpg" },
  { id: 12, name: "UP GOVERNMENT", logo: "fund12.png" },
  { id: 13, name: "UTM Malaysia", logo: "fund13.png" },
   { id: 14, name: "IEEE CIS", logo: "fund14.jpg" },
  { id: 15, name: "University of Peradeniya", logo: "fund15.png" },
];

function Funding() {
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
                  alt={partner.name}
                  className="partner-img"
                />
              </div>
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Funding;
