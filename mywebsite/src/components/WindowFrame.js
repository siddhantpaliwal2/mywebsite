import React, { useState } from 'react';
import '../styles/xpTheme.css';

const WindowFrame = ({ title, onClose, onMinimize, children }) => {
  const [isMaximized, setIsMaximized] = useState(true);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div className={`xp-window ${isMaximized ? 'maximized' : ''}`}>
      <div className="xp-title-bar" onDoubleClick={toggleMaximize}>
        <div className="xp-title-text">
          {/* Default icon or passed prop */}
          <span style={{marginRight: '5px'}}>💻</span> 
          {title}
        </div>
        <div className="xp-title-controls">
          <div className="xp-btn" onClick={onMinimize}>_</div>
          <div className="xp-btn" onClick={toggleMaximize}>□</div>
          <div className="xp-btn xp-close-btn" onClick={onClose}>X</div>
        </div>
      </div>
      <div className="xp-window-content-frame">
        {/* Can add File Edit View... menu bar here if desired */}
        <div className="xp-window-inner-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WindowFrame;
