import React from 'react';
import { useState } from "react";

export default function ScraperSection() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState("");

  const handleScrape = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setLeads([]);
    try {
      const API_BASE_URL =
      window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
        ? "http://localhost:3000"
        : "https://scrapeworks-production.up.railway.app";
    
    const response = await fetch(`${API_BASE_URL}/api/scrape`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city }),
      });
      if (!response.ok) throw new Error("Scraping failed");
      const data = await response.json();
      setLeads(data.leads || []);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Web Scraper</h2>
      <p className="mb-6 text-gray-700">
        Enter a city to scrape public business information from BBB. This tool will help you build leads as a freelance web developer.
      </p>
      {loading && (
        <div className="flex items-center justify-center mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded animate-pulse">
          <svg className="w-6 h-6 mr-3 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <span className="font-semibold">Scraping in progress...</span>
          <span className="ml-2">Please do not refresh or leave the page until results appear.</span>
        </div>
      )}
      <form onSubmit={handleScrape} className="flex flex-col items-center space-y-4 w-full">
        <input
          type="text"
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-xs"
          placeholder="Enter city (e.g. New York)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition disabled:opacity-50"
          disabled={loading || !city}
        >
          {loading ? "Scraping..." : "Scrape"}
        </button>
      </form>
      {error && <div className="mt-4 text-red-600">{error}</div>}
      {leads.length > 0 && (
        <div className="mt-8 w-full">
          <h3 className="text-lg font-semibold mb-2">Leads Found: {leads.length}</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Category</th>
                  <th className="p-2 border">Phone</th>
                  <th className="p-2 border">Website</th>
                  <th className="p-2 border">Address</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, idx) => (
                  <tr key={idx} className="even:bg-gray-50">
                    <td className="p-2 border">{lead.name}</td>
                    <td className="p-2 border">{lead.category}</td>
                    <td className="p-2 border">{lead.phone}</td>
                    <td className="p-2 border">
                      {lead.website ? (
                        <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Website</a>
                      ) : ""}
                    </td>
                    <td className="p-2 border">{lead.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}