import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/technology" element={<Technology />} />x
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/future" element={<Future />} />
        </Routes>
      </BrowserRouter>

  
    </>
  );
}

export default OntologyEntry;