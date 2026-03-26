import React from "react";
import "../styles/HealthMonitoringProject.css";

const OntologyProject = () => {
  return (
    <div className="hm-card">
      <h2 className="hm-title">
        Ontology (LLDHEMO – Lower-Limb Disability Health & Emotion Monitoring)
      </h2>

      {/* Brief */}
      <p className="hm-brief">
      This project focuses on integrating Big Data and Semantic Web technologies to transform traditional healthcare data into meaningful, machine-readable knowledge. Using R2RML, relational data is converted into RDF and stored in HDFS for scalable processing. The system enables both structured querying through HiveQL and semantic querying using SPARQL by integrating the WUHM ontology. This approach supports advanced analytics, better data interoperability, and intelligent healthcare insights.
      </p>

      {/* Objectives */}
      <div className="hm-objectives">
        <h4>Objectives</h4>
        <ul>
  <li>Convert relational healthcare data into RDF format using R2RML</li>
  <li>Store and manage RDF data in a distributed environment (HDFS)</li>
  <li>Perform structured data analysis using HiveQL</li>
  <li>Integrate WUHM ontology for semantic enrichment</li>
  <li>Enable advanced querying and knowledge extraction using SPARQL</li>
</ul>
      </div>

      {/* Buttons */}
      <div className="hm-actions">
        {/* <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-demo-btn"
        >
          Demo Video
        </a> */}

        <a
          href="https://github.com/BDA-IIITA/TiH-Ontology_HDFS"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-github-btn"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default OntologyProject;