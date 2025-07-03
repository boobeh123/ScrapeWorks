const cheerio = require('cheerio');

function slugifyCity(city) {
  return city.toLowerCase().replace(/,/g, '').replace(/\s+/g, '-');
}

function buildBBBSearchUrl(city, category) {
    const params = new URLSearchParams({
      find_country: 'USA',
      find_text: category,
      find_loc: city
    });
    return `https://www.bbb.org/search?${params.toString()}`;
}

async function scrapeBusinessPage(url) {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
  
    const name = $('#businessName').first().text().trim() ||
                 $('.bds-h4.result-business-name').first().text().trim();
    const address = $('.bpr-overview-address').first().text().trim();
    const phone = $('[href^="tel:"]').first().text().trim();
    const website = $('a:contains("Visit Website")').attr('href') || '';
  
    let city = '', state = '', zip = '';
    const addressMatch = address.match(/(.+),\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/);
    if (addressMatch) {
      const left = addressMatch[1].trim();
      state = addressMatch[2];
      zip = addressMatch[3];
      const cityMatch = left.match(/([A-Za-z ]+)$/);
      city = cityMatch ? cityMatch[1].trim() : left;
    }

    if (!name) return null;
  
    return {
      name,
      website,
      phone,
      address,
      city,
      state,
      zip,
      source: 'BBB',
      scrapedAt: new Date(),
    };
}

module.exports = {
    scrape: async (req, res) => {
        const { city } = req.body;
    
        try {
        
        const searchUrl = buildBBBSearchUrl(city, "");
        const response = await fetch(searchUrl);
        const html = await response.text();
        const $ = cheerio.load(html);

        const categories = [];
        $('a.popular-category-link').each((i, el) => {
          const text = $(el).text().trim();
          if (text && !categories.includes(text)) {
            categories.push(text);
          }
        });
        console.log('Categories found:', categories);
        let allLeads = [];
        for (const category of categories) {
          const catSearchUrl = buildBBBSearchUrl(city, category);
          const catResponse = await fetch(catSearchUrl);
          const catHtml = await catResponse.text();
          const cat$ = cheerio.load(catHtml);
          const businessLinks = [];
          cat$('a').each((i, el) => {
            const href = cat$(el).attr('href');
            if (href && href.includes('/profile/')) {
              const fullUrl = 'https://www.bbb.org' + href;
              if (!businessLinks.includes(fullUrl)) {
                businessLinks.push(fullUrl);
              }
            }
          });
          console.log(`Category: ${category} - Business links found:`, businessLinks.length);
          const leads = [];
          for (const link of businessLinks) {
            try {
              const lead = await scrapeBusinessPage(link);
              if (lead) {
                lead.category = category;
                leads.push(lead);
              }
            } catch (err) {
              console.error('Error scraping business:', link, err);
            }
          }
          allLeads = allLeads.concat(leads);
        }
        const uniqueLeads = [];
        const seen = new Set();
        for (const lead of allLeads) {
          const key = lead.name + '|' + lead.address;
          if (!seen.has(key)) {
            uniqueLeads.push(lead);
            seen.add(key);
          }
        }
        console.log('Total unique leads:', uniqueLeads.length);
        res.json({ leads: uniqueLeads });
      } catch (err) {
        console.error('Scrape error:', err);
        res.status(500).json({ error: "Scraping failed" });
        }
    },
}