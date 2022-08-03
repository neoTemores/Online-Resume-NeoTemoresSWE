import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Styles/App.css';
import Home from './Components/Home';
import About from './Components/About'
// import Header from './Components/Header'
// import TechnicalSkills from './Components/TechnicalSkills';
// import Projects from './Components/Projects';
// import Experience from './Components/Experience';
// import Education from './Components/Education';
// import Links from './Components/Links';

function App() {
  return (
    <div className="AppContainer">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        {/* <Route path="/technical-skills" element={<TechnicalSkills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/links" element={<Links />} /> */}
      </Routes>
    </div>
  );
}

export default App;
