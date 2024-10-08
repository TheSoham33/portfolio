import React, { useState, useEffect } from 'react';
import './DarkMode.css';
function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <button className="modeBtn" onClick={ toggleTheme }>Mode</button>
    </div>
  );
}
export default DarkMode;