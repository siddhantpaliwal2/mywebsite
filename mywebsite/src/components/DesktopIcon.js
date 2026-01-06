import React from 'react';
import '../styles/xpTheme.css';

const DesktopIcon = ({ title, icon, onClick }) => {
  return (
    <div className="desktop-icon" onClick={onClick}>
      {/* Use a default emoji or passed icon image */}
      {icon ? (
        <img src={icon} alt={title} className="desktop-icon-img" />
      ) : (
        <div style={{fontSize: '32px'}}>📁</div>
      )}
      <div className="icon-text">{title}</div>
    </div>
  );
};

export default DesktopIcon;

