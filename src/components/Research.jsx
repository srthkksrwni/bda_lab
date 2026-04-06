import React from "react";
import "../styles/research.css";

function Research() {
  const domains = [
    {
      id: "bda",
      title: "Big Data Analytics",
      desc: "Scalable analysis of large datasets using distributed computing for knowledge discovery.",
      img: "../../lg.png", 
      watermark: "📊"
    },
    {
      id: "dv",
      title: "Data Visualisation",
      desc: "Visual analytics and dashboard design for effective communication of complex data.",
      img: "../../data visualization.png", 
      watermark: "📈"
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      desc: "Deep learning models for prediction, classification, and intelligent decision support.",
      img: "../../ai and ml.png",
      watermark: "🧠"
    },
    {
      id: "ss",
      title: "Software Systems",
      desc: "Development of reliable, scalable, and secure systems for data-intensive apps.",
      img: "../../softwarwe.png",
      watermark: "💻"
    }
  ];

  return (
    <section className="research-section" id="research">
      <div className="section-header">
        <h2 className="section-title">Research Domains</h2>
        <div className="title-underline"></div>
        <p className="research-subtext">
          The lab explores the frontiers of <span>Data Science</span> and <span>Intelligent Systems</span>.
        </p>
      </div>

      <div className="research-grid">
        {domains.map((domain) => (
          <div className="research-card" key={domain.id}>
            <div className={`icon-container ${domain.id}-bg`}>
           
              <img 
                src={`/images/${domain.img}`} 
                alt={domain.title} 
                className="research-icon-img" 
              />
            </div>
            <h3>{domain.title}</h3>
            <p>{domain.desc}</p>
            <div className="card-watermark">{domain.watermark}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;
