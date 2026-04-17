import { Routes, Route } from "react-router-dom";
// 1. CSS ko yahan import karein taaki ontology ke saare pages par design aa jaye
import "./style.css"; 

// 2. Project B ka apna Navbar import karein
import OntologyNavbar from "./components/Navbar"; 

import Home from "./pages/Home";
import Objectives from "./pages/Objectives";
import Methodology from "./pages/Methodology";
import Applications from "./pages/Applications";
import Technology from "./pages/Technology";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Future from "./pages/Future";

function OntologyEntry() {
  return (
    <div className=".ontology-site">
      {/* 3. Project B ka Navbar yahan rakhein taaki ye har page par dikhe */}
      <OntologyNavbar />

      <Routes>
        {/* URL: #/ontology/ */}
        <Route index element={<Home />} />
        
        {/* URL: #/ontology/objectives aur baaki raste */}
        <Route path="objectives" element={<Objectives />} />
        <Route path="methodology" element={<Methodology />} />
        <Route path="applications" element={<Applications />} />
        <Route path="technology" element={<Technology />} />
        <Route path="publications" element={<Publications />} />
        <Route path="contact" element={<Contact />} />
        <Route path="future" element={<Future />} />
      </Routes>

      {/* Agar Project B ka koi apna footer hai toh yahan add kar sakte hain */}
    </div>
  );
}

export default OntologyEntry;
