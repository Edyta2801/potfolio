import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <section className="header">
            <div className="navigation">
              <div className="home"><a href="Edyta2801">home</a></div>

              <Link to="/" className="item">Projects</Link>
              <Link to="/articles" className="item">Articles</Link>
              <Link to="/about" className="item">About</Link>
              <img src={logo} className="App-logo" alt="logo" />
              <Route exact path="/" component={Projects} />
              <Route path="/articles" component={Articles} />
              <Route path="/about" component={About} />
            </div>
          </section>
        </div>
      </BrowserRouter >
    );
  };
}

export default App;