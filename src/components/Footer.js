import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
        <p className="footer-copyright">© {new Date().getFullYear()} Al Amru Bil Maruf</p>
    </footer>
  );
}; 