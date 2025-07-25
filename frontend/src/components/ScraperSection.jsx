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
    <section className="max-w-2xl mx-auto mt-20 p-6 sm:p-12 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-2 text-center tracking-tight">Web Scraper</h2>
      <p className="mb-10 text-gray-600 text-center text-lg">
        Enter a city to scrape public business information from BBB. This tool will help you build leads as a freelance web developer.
      </p>
      {loading && (
        <div className="flex items-center justify-center mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-lg animate-pulse">
          <svg className="w-6 h-6 mr-3 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <span className="font-semibold">Scraping in progress...</span>
          <span className="ml-2">Please do not refresh or leave the page until results appear.</span>
        </div>
      )}
      <form onSubmit={handleScrape} className="flex flex-col items-center gap-4 w-full">
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          placeholder="Enter city (e.g. New York)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-8 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition disabled:opacity-50 flex items-center gap-2"
          disabled={loading || !city}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          {loading ? "Scraping..." : "Scrape"}
        </button>
      </form>
      {error && <div className="mt-4 text-red-600 text-center font-medium">{error}</div>}
      {leads.length > 0 && (
        <div className="mt-10 w-full overflow-x-auto animate-fade-in">
          <h3 className="text-lg font-semibold mb-3 text-blue-800">Leads Found: {leads.length}</h3>
          <table className="min-w-full text-sm border rounded-lg overflow-hidden bg-white">
            <thead>
              <tr className="bg-blue-50 text-blue-900">
                <th className="p-3 border-b font-semibold">Name</th>
                <th className="p-3 border-b font-semibold">Category</th>
                <th className="p-3 border-b font-semibold">Phone</th>
                <th className="p-3 border-b font-semibold">Website</th>
                <th className="p-3 border-b font-semibold">Address</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, idx) => (
                <tr key={idx} className="even:bg-blue-50 hover:bg-blue-100 transition-colors">
                  <td className="p-3 border-b">{lead.name}</td>
                  <td className="p-3 border-b">{lead.category}</td>
                  <td className="p-3 border-b">{lead.phone}</td>
                  <td className="p-3 border-b">
                    {lead.website ? (
                      <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Website</a>
                    ) : ""}
                  </td>
                  <td className="p-3 border-b">{lead.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}