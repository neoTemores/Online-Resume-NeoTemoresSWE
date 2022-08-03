import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Styles/App.css';
import Home from './Components/Home';
import About from './Components/About'


function App() {
  return (
    <div className="AppContainer">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
