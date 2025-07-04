import React from 'react';
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t mt-12 py-6">
      <div className="container mx-auto px-4">
        <h5 className="text-lg font-semibold mb-2 text-blue-700">Social Media</h5>
        <ul className="flex space-x-6 mb-4">
          <li>
            <a
              href="https://x.com/boobeh123"
              title="X"
              aria-label="Follow us on X"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700 text-2xl"
            >
              <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/boobeh123/ScrapeWorks"
              title="GitHub"
              aria-label="Visit our GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700 text-2xl"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://bobby-asakawa.netlify.app/"
              title="Portfolio"
              aria-label="Visit our portfolio website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700 text-2xl"
            >
              <i className="fa-solid fa-globe" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <div className="text-center text-gray-500 text-sm">
          <p>
            © <span>{year}</span> ScrapeWorks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 