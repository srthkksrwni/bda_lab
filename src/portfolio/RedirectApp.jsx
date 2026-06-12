import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Experience from "./Pages/Experience/Experience";
import Education from "./Pages/Education/Education";
import Research from "./Pages/Research/Research";
import Publications from "./Pages/Publications/Publications";
import Contact from "./Pages/Contact/Contact";
import AchievementsAndActivities from "./Pages/AchievementsActivities/AchievementsActivities";


function RedirectApp() {
  return (
    <>
      <ScrollToTop />

      <div className="app">
        <Navbar />

        <main className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
            <Route path="research" element={<Research />} />
            <Route path="publications" element={<Publications />} />
            <Route path="achievements" element={<AchievementsAndActivities />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default RedirectApp;