import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-deep-navy sticky top-0 z-50 shadow-md w-full border-b border-blue-100">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" aria-label="Home" className="flex items-center group" reloadDocument>
          <svg width="48" height="48" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-lg">
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#4fd1ff" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#18181b" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect width="180" height="180" rx="32" fill="#18181b"/>
            <ellipse cx="90" cy="120" rx="48" ry="24" stroke="#4fd1ff" strokeWidth="2" fill="url(#glow)" />
            <ellipse cx="90" cy="120" rx="32" ry="12" stroke="#39ff14" strokeWidth="1" fill="none" />
            <ellipse cx="90" cy="120" rx="16" ry="6" stroke="#ff3cac" strokeWidth="1" fill="none" />
            <circle cx="90" cy="80" r="18" fill="#18181b" stroke="#ff3cac" strokeWidth="4" />
            <circle cx="90" cy="65" r="8" fill="#18181b" stroke="#4fd1ff" strokeWidth="3" />
            <polyline points="90,80 65,70 55,50" stroke="#39ff14" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <polyline points="90,80 70,80 50,70" stroke="#4fd1ff" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <polyline points="90,80 75,90 60,100" stroke="#ff3cac" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <polyline points="90,80 115,70 125,50" stroke="#39ff14" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <polyline points="90,80 110,80 130,70" stroke="#4fd1ff" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <polyline points="90,80 105,90 120,100" stroke="#ff3cac" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <line x1="90" y1="65" x2="90" y2="80" stroke="#4fd1ff" strokeWidth="2" strokeDasharray="2,2"/>
            <line x1="90" y1="80" x2="90" y2="120" stroke="#39ff14" strokeWidth="2" strokeDasharray="2,2"/>
            <ellipse cx="90" cy="120" rx="50" ry="26" fill="url(#glow)" opacity="0.5" />
          </svg>
        </Link>
      </div>
    </header>
  );
}