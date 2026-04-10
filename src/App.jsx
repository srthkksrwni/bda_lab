import React from "react";
// BrowserRouter ki jagah HashRouter import kiya
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Faculty from "./components/Faculty";
import Students from "./components/Students";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import DatasetsPage from "./components/DatasetsPage";
import ResourcesPage from "./components/ResourcesPage";
import { HashLink as Link } from "react-router-hash-link";
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

function App() {
  return (
  
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
