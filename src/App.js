import React, { useState, useEffect } from "react";
import './App.css';
import Home from "./Home"
import About from "./About"
import FloatingNav from "./FloatingNav";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import Community from "./Community";
import Achievements from "./Achievements";
import School from "./School";

function App() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);
  return (
    <Router basename="/my-portfolio">
      <div className="App" >
        <FloatingNav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workhistory" element={<WorkHistory />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/community" element={<Community />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/school" element={<School />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
