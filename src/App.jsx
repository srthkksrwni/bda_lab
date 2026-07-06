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
import RedirectApp from "./portfolio/RedirectApp";
import CloudPlatformProject from "./components/CloudPlatform";
import MobileApplicationProject from "./components/Mobileapp";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./components/Blog";
import Events from "./components/Events";
import Contact from "./components/Contact";
import StudentCorner from "./components/StudentCorner";
import Redirect from "./ontology/Redirect";
import CsirIframe from "./components/CsirIframe";

import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import ContactMessages from "./admin/ContactMessages/ContactMessages";
import AdminResearchUpdates from "./admin/AdminResearchUpdates";
import AdminEvents from "./admin/AdminEvents/AdminEvents";
import AdminPeople from "./admin/People/AdminPeople";
import AdminFunding from "./admin/FundingCollaboration/FundingCollaboration";
import AdminPublications from "./admin/Publications/AdminPublications";
import AdminBlogs from "./admin/Blogs/AdminBlogs";
import ProtectedRoute from "./admin/ProtectedRoute/ProtectedRoute";
import AdminLogin from "./admin/AdminLogin/AdminLogin";
import ForgotPassword from "./admin/ForgotPassword/ForgotPassword";
import ResetPassword from "./admin/ResetPassword/ResetPassword";

function AppContent() {
  const location = useLocation();

  const isOntologyRoute = location.pathname.startsWith("/ontology");
  const isCsirRoute = location.pathname.startsWith("/csir");
  const isPortfolioRoute = location.pathname.startsWith("/portfolio");
  const isModestRoute = location.pathname.startsWith("/modest");
  const isAdminRoute = location.pathname.startsWith("/admin");

  const hideNavFooter =
    isOntologyRoute ||
    isCsirRoute ||
    isPortfolioRoute ||
    isModestRoute ||
    isAdminRoute;

  return (
    <div className="App">
      {!isAdminRoute && <ScrollToTop />}
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
        <Route path="/csir/:fileName" element={<CsirIframe />} />
        <Route path="/csir" element={<CsirIframe />} />
        <Route path="/ontology/*" element={<Redirect />} />
        <Route path="/portfolio/*" element={<RedirectApp />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin/reset-password" element={<ResetPassword />} />

        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="funding" element={<AdminFunding />} />
          <Route path="people" element={<AdminPeople />} />
          <Route path="publications" element={<AdminPublications />} />
          <Route path="research-updates" element={<AdminResearchUpdates />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="contact-messages" element={<ContactMessages />} />
        </Route>
      </Routes>

      {!hideNavFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;