export default function ScraperSection() {
    return (
      <section className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Web Scraper</h2>
        <p className="mb-6 text-gray-700">
          Enter a business website or keyword to scrape public information from sources like Yelp and BBB. This tool will help you build leads as a freelance web developer.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <button
            className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            disabled
          >
            Scrape (Coming Soon)
          </button>
        </div>
      </section>
    );
  }