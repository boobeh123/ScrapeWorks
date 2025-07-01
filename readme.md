## "What are things I can do early at the start of building a website from scratch, to make the code more modular, flexible, and organized?"
---
- I asked this question, and I will follow the answer.
- I will start from a blank page and build a web application.

Watch the site progress - Deployed site: https://scrapeworks.netlify.app/




## Version History 
---
# 🛠️ ScrapeWorks v0 — Project Initialization, tooling & environment
📅 **Release Date:** July 1, 2025
---
# 📢 Developer's Notes - **git init, npm init, directory setup, linter, formatter, scaffold backend**
---
- I made a new repository. I'm building a web app and I want it to scrape public information from business-related websites to build leads for a freelancing website developer
- I've been building with repositories that were already initialized, I forgot how to git init & npm init process, but my muscle memory kicked in
- I set up the .env & .gitignore despite only being a static webpage at the moment
- I will be using ESLint & Prettier as a linter and formatter
- I am using MVC architecture & I will set up my folders to match React projects
- I am using normalize.css, so styling is consistent 
- I filled up my `<head>` element, added Google Fonts & Icons from FontAwesome
- I installed express & got a server up
    - Installed morgan for logging, express-validator for input validator & sanitization
- I installed dotenv & mongoose
    - Got a LeadSchema planned and DB_STRING connected to MongoDB
- I created two directories-- frontend & backend. 
    - One of the main reasons this is done is because React has separate dependencies (node_modules) than the backend
    - It also keeps the project organized and still follows MVC architecture
- I created a Vite + React project 
- I installed Tailwindcss, postcss, autoprefixer
    - Ran into an error and couldn't initialize tailwindcss with npx
        - I created the tailwind.config.cjs & postcss.config.cjs manually
- Express does not render a React frontend the same way as a templating language like EJS, pug, or Handlebars
    - I will be using Client-Side Rendering (CSR)
---------------------------------------------------------------------------------------------------------------------------
