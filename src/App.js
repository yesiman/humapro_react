import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';

import LangSelector from './components/LangSelector';

export default function App() {
  return (
    <Router>
      <div>
        <div className="row rowmenu">
          <div className="col-10">
            <nav>
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-2">
            <LangSelector/>
          </div>
        </div>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/"  element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}





/*
function About() {
  return (
    <div className="App">
      <div className="main-header">
        <div className="row">
          <div className="mainmenu col-10">
              <a href="index.html">Home</a>
              <a href="contact.html">Contact</a>                     
          </div>
          <div className="rightmenu col-2">
              <LangSelector/>
          </div>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/