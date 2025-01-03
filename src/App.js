import React, { useState, useEffect } from "react";
import './App.css';
import Home from "./Home"
import About from "./About"
import FloatingNav from "./FloatingNav";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import Community from "./Community";

function App() {
  return (
    <Router>
      <FloatingNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/workhistory" element={<WorkHistory />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
