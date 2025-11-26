import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Interior_designing from "./components/Interior_designing";
import Joinery from "./components/Joinery";
import False_ceiling from "./components/False_ceiling";
import Tiling_works from "./components/Tiling_works";
import Carpentry from "./components/Carpentry";
import Electrical from "./components/Electrical";
import Plumbing from "./components/Plumbing";
import HVAC from "./components/HVAC";

// ✅ NEW IMPORT
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      {/* ✅ FIXES PAGE NOT LOADING FROM TOP */}
      <ScrollToTop />

      <div className="font-sans bg-[#111] text-white">
        <Navbar />

        <Routes>

          {/* HOME PAGE – Home + About + Contact */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Contact />
              </>
            }
          />

          {/* SERVICE PAGES */}
          <Route path="/Interior_designing" element={<Interior_designing />} />
          <Route path="/Joinery" element={<Joinery />} />
          <Route path="/False_ceiling" element={<False_ceiling />} />
          <Route path="/Tiling_works" element={<Tiling_works />} />
          <Route path="/Carpentry" element={<Carpentry />} />

          {/* MEP PAGES */}
          <Route path="/Electrical" element={<Electrical />} />
          <Route path="/Plumbing" element={<Plumbing />} />
          <Route path="/HVAC" element={<HVAC />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
