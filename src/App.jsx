import React from "react";
// HashRouter aur useLocation ko import kiya
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Faculty from "./components/Faculty";
import Students from "./components/Students";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import DatasetsPage from "./components/DatasetsPage";
import ResourcesPage from "./components/ResourcesPage";
import ProjectPage from "./components/ProjectPage";
import BimodalGestureCareWebsite from "./components/GestureCarepage";
import HealthMonitoringProject from "./components/HealthMonitoring";
import CEPProject from "./components/CEPProject";
import OntologyProject from "./components/Ontology";
import CloudPlatformProject from "./components/CloudPlatform";
import MobileApplicationProject from "./components/Mobileapp";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./components/Blog";
import Events from "./components/Events";
import Contact from "./components/Contact";
import StudentCorner from "./components/StudentCorner";
import ModestIframe from "./components/ModestIframe";
import OntologyEntry from "./ontology/OntologyEntry";

// Ek naya component banaya taaki location track ho sake
function AppContent() {
  const location = useLocation();

  // Ye check karega ki kya hum ontology waale pages par hain
  // Agar path "/ontology" se start hota hai toh ye true hoga
  const isOntologyProject = location.pathname.startsWith("/ontology");

  return (
    <div className="App">
      <ScrollToTop />
      
      {/* Agar ontology project NAHI hai, tabhi Project A ka Navbar dikhao */}
      {!isOntologyProject && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/datasets" element={<DatasetsPage />} />
        <Route path="/projectpage" element={<ProjectPage />} />
        <Route path="/gesturecare" element={<BimodalGestureCareWebsite />} />
        <Route path="/healthmonitor" element={<HealthMonitoringProject />} />
        <Route path="/cepproject" element={<CEPProject />} />
        <Route path="/ontologyproject" element={<OntologyProject />} />
        <Route path="/cloudplatform" element={<CloudPlatformProject />} />
        <Route path="/mobile-app" element={<MobileApplicationProject />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studentCorner" element={<StudentCorner />} />
        <Route path="/modest" element={<ModestIframe />} />
        
        {/* Project B ka rasta */}
        <Route path="/ontology/*" element={<OntologyEntry />} />
      </Routes>

      {/* Agar ontology project NAHI hai, tabhi Project A ka Footer dikhao */}
      {!isOntologyProject && <Footer />}
    </div>
  );
}

// Main App component
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
