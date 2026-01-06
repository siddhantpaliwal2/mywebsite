import React, { useState, useEffect } from 'react';
import '../styles/xpTheme.css';

const Taskbar = ({ openWindows, activeWindow, onWindowClick, onStartClick }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="xp-taskbar">
      <div className="start-button" onClick={onStartClick}>
        <span className="start-logo">❖</span> Start
      </div>
      <div className="taskbar-items">
        {openWindows.map((win) => (
          <div 
            key={win.id} 
            className={`taskbar-item ${activeWindow === win.id ? 'active' : ''}`}
            onClick={() => onWindowClick(win.id)}
          >
            {win.title}
          </div>
        ))}
      </div>
      <div className="system-tray">
        <span style={{marginRight: '5px'}}>🔊</span>
        {formatTime(time)}
      </div>
    </div>
  );
};

export default Taskbar;

