// src/components/CsirIframe.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CsirIframe = () => {
  const { fileName } = useParams();
  
  // Agar URL /csir hai toh index.html, agar /csir/team hai toh team.html
  // Extension .html hum yahan append kar rahe hain
  const fileToLoad = fileName ? `${fileName}.html` : "index.html";

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src={`/CSIR/${fileToLoad}`}
        title="CSIR Project"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};

export default CsirIframe;
