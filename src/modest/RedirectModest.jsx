import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./PAGES/Home/Home";
import About from "./PAGES/About";
import ResearchPublication from "./PAGES/Research-Publication";
import Framework from "./PAGES/The MODEST Framework";
import Services from "./PAGES/Services";
import Members from "./PAGES/Members";
import Students from "./PAGES/Students";
import Contact from "./PAGES/Contact";
import NewsEvent from "./PAGES/NewsEvent";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./modest.css";

function RedirectModest() {
  return (
    <div className="modest-wrapper">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="research-publications" element={<ResearchPublication />} />
        <Route path="framework" element={<Framework />} />
        <Route path="services" element={<Services />} />
        <Route path="newsevents" element={<NewsEvent />} />
        <Route path="contact" element={<Contact />} />
        <Route path="members" element={<Members />} />
        <Route path="students" element={<Students />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default RedirectModest;
