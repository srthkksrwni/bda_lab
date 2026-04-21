import { Routes, Route } from "react-router-dom";
// 1. CSS import karna mat bhulna
import "./style.css";

import Home from "./pages/Home";
import Objectives from "./pages/Objectives";
import Methodology from "./pages/Methodology";
import Applications from "./pages/Applications";
import Technology from "./pages/Technology";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Future from "./pages/Future";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function Redirect() {
  const [dark, setDark] = useState(false);

  // LocalStorage se theme uthayein
  useEffect(() => {
    const savedTheme = localStorage.getItem("ontology-theme");
    if (savedTheme === "dark") {
      setDark(true);
    }
  }, []);

  // Theme toggle function
  const toggleDark = () => {
    const newTheme = !dark;
    setDark(newTheme);
    localStorage.setItem("ontology-theme", newTheme ? "dark" : "light");
  };

  return (
    /* 🔥 Yahan class toggle ho rahi hai */
    <div className={`ontology-wrapper ${dark ? "dark" : ""}`}>
      <Navbar dark={dark} toggleDark={toggleDark} />
      <Routes>
        {/* Index route URL: #/ontology/ par khulega */}
        <Route index element={<Home />} />

        {/* Ye paths: #/ontology/objectives format mein chalenge */}
        <Route path="objectives" element={<Objectives />} />
        <Route path="methodology" element={<Methodology />} />
        <Route path="applications" element={<Applications />} />
        <Route path="technology" element={<Technology />} />
        <Route path="publications" element={<Publications />} />
        <Route path="contact" element={<Contact />} />
        <Route path="future" element={<Future />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Redirect;
