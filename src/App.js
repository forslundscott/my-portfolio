import React, { useState, useEffect } from "react";
import './App.css';
import Home from "./Home"
import About from "./About"
import FloatingNav from "./FloatingNav";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <FloatingNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
