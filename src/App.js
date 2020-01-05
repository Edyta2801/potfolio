// App.jsx

import React from 'react';
// Replace SVG file with your logo
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <img src={logo} className="logo" alt="Logo Image" />
        <div className="navigation-sub">
          <a href="" className="item">Projects</a>
          <a href="" className="item">Articles</a>
          <a href="" className="item">About</a>
        </div>
      </div>
    </div>
  );
}

export default App;
