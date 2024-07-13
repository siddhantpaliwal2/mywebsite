import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Projects from './Projects';

function App() {
  const [selectedPage, setSelectedPage] = useState('Home');
  const [confetti, setConfetti] = useState(false);

  const triggerConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000); // Stop confetti after 3 seconds
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="nav-links">
              <Link to="/home" className="nav-link">
                <li
                  className={selectedPage === 'Home' ? 'selected' : ''}
                  onClick={() => setSelectedPage('Home')}
                >
                  Home
                </li>
              </Link>
              <li
                className={selectedPage === 'Projects' ? 'selected' : ''}
                onClick={() => setSelectedPage('Projects')}
              >
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home triggerConfetti={triggerConfetti} confetti={confetti} />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>© 2024 Siddhant Paliwal, React and Vercel</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
