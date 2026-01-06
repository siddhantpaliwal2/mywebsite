import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './styles/App.css';
import './styles/xpTheme.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import WindowFrame from './components/WindowFrame';

// Import icons (using existing images for now as placeholders)
import profilePic from './assets/images/profilepic.jpg';
import folderIcon from './assets/images/folder.png';
// We can use emojis or other images for icons if needed

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [confetti, setConfetti] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    setIsMinimized(false);
  }, [location.pathname]);

  const triggerConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  // Determine active window title based on path
  const getWindowTitle = () => {
    if (location.pathname.includes('/home')) return 'My Profile';
    if (location.pathname.includes('/projects')) return 'My Projects';
    return '';
  };

  const currentTitle = getWindowTitle();
  const isWindowOpen = currentTitle !== '';

  const handleCloseWindow = () => {
    navigate('/');
  };

  const openWindows = isWindowOpen ? [{ id: location.pathname, title: currentTitle }] : [];

  return (
    <div className="xp-desktop">
      <div className="desktop-icons-area">
        <DesktopIcon 
          title="My Profile" 
          onClick={() => navigate('/home')} 
          icon={folderIcon} 
        />
        <DesktopIcon 
          title="My Projects" 
          onClick={() => navigate('/projects')} 
          icon={folderIcon}
        />
        <DesktopIcon 
          title="GitHub" 
          onClick={() => window.open('https://github.com/siddhantpaliwal2', '_blank')} 
          icon={folderIcon}
        />
        <DesktopIcon 
          title="LinkedIn" 
          onClick={() => window.open('https://www.linkedin.com/in/siddhantpaliwal', '_blank')} 
          icon={folderIcon}
        />
        <DesktopIcon 
          title="Email Me" 
          onClick={() => window.location.href = 'mailto:paliwal.siddhant@gmail.com'} 
          icon={folderIcon}
        />
        <DesktopIcon 
          title="Letterboxd" 
          onClick={() => window.open('https://letterboxd.com/siddhantpaliwal/', '_blank')} 
          icon={folderIcon}
        />
      </div>

      {isWindowOpen && !isMinimized && (
        <WindowFrame 
          title={currentTitle} 
          onClose={handleCloseWindow}
          onMinimize={() => setIsMinimized(true)}
        >
          <Routes>
            <Route path="/home" element={<Home triggerConfetti={triggerConfetti} confetti={confetti} />} />
            <Route path="/projects" element={<Projects />} />
            {/* Redirect / to /home if you want auto-open, or remove to start with empty desktop */}
             {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          </Routes>
        </WindowFrame>
      )}

      {/* Helper route to redirect if on root but maybe we want that to be empty desktop now? 
          Let's leave root as empty desktop. */}
      
      <Taskbar 
        openWindows={openWindows} 
        activeWindow={isMinimized ? null : location.pathname}
        onWindowClick={(id) => {
          if (id === location.pathname) {
            setIsMinimized(!isMinimized);
          } else {
            navigate(id);
          }
        }}
        onStartClick={() => window.location.href = "https://www.youtube.com/watch?v=uHgt8giw1LY"}
      />
    </div>
  );
}

export default App;
