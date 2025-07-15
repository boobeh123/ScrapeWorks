import React from 'react';
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20 pt-10 pb-8 w-full">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <div className="w-full border-t border-gray-100 mb-6"></div>
        <h5 className="text-xl font-bold mb-4 text-blue-800 tracking-tight">Social Media</h5>
        <div className="flex flex-row space-x-8 mb-6">
          <a href="https://x.com/boobeh123" title="X" aria-label="Follow us on X" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 text-3xl transition-colors focus:outline-none focus:text-blue-800">
            <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/boobeh123/ScrapeWorks" title="GitHub" aria-label="Visit our GitHub profile" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 text-3xl transition-colors focus:outline-none focus:text-blue-800">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://bobby-asakawa.netlify.app/" title="Portfolio" aria-label="Visit our portfolio website" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 text-3xl transition-colors focus:outline-none focus:text-blue-800">
            <i className="fa-solid fa-globe" aria-hidden="true"></i>
          </a>
        </div>
        <div className="text-center text-gray-400 text-sm mb-2">
          <p>
            © <span>{year}</span> <span className="font-semibold text-gray-600">ScrapeWorks</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 