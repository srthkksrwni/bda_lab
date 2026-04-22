import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import Redirect from "./ontology/Redirect";
import CsirIframe from "./components/CsirIframe";

function AppContent() {
  const location = useLocation();

  // Check karega ki kya hum ontology ya csir routes par hain
  const isOntologyRoute = location.pathname.startsWith("/ontology");
  const isCsirRoute = location.pathname.startsWith("/csir");

  // Dono mein se kisi bhi route par ho toh Navbar/Footer hide hoga
  const hideNavFooter = isOntologyRoute || isCsirRoute;

  return (
    <div className="App">
      <ScrollToTop />

      {/* Agar ontology ya csir page nahi hai, tabhi Navbar dikhao */}
      {!hideNavFooter && <Navbar />}

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

        {/* CSIR Project Routes - Inhe Routes ke andar rakha hai */}
        <Route path="/csir/:fileName" element={<CsirIframe />} />
        <Route path="/csir" element={<CsirIframe />} />

        {/* Ontology Project Entry */}
        <Route path="/ontology/*" element={<Redirect />} />
      </Routes>

      {/* Agar ontology ya csir page nahi hai, tabhi Footer dikhao */}
      {!hideNavFooter && <Footer />}
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
