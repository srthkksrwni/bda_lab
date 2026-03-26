import React from "react";
import "../styles/DatasetsPage.css";
import { datasets } from "../data/datasets";

const DatasetsPage = () => {
  return (
    <div className="datasets-wrapper">
      <h1 className="datasets-title">DATASETS</h1>

      <div className="datasets-box">
        {datasets.map((dataset, index) => (
          <div className="dataset-row" key={index}>
            <div className="dataset-left">
              <a
                href={dataset.link}
                target="_blank"
                rel="noopener noreferrer"
                className="dataset-link"
              >
                {dataset.name}
              </a>

              <p className="dataset-info">{dataset.info}</p>
            </div>

            <span className="dataset-source">{dataset.source}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatasetsPage;
