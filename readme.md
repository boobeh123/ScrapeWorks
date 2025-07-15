## Description
A full-stack React web application. Under development

Frontend Deployed on Netlify: https://scrapeworks.netlify.app/
Backend Deployed on Railway: https://scrapeworks-production.up.railway.app/

## Demo

## Optimizations 

### Tech used:
<img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /><img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /><img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="40" /><img src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="NodeJS" height="50" /><img src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /><img src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="ExpressJS" height="50" /><img src="https://img.shields.io/badge/Mongoose.js-8A0403?style=for-the-badge&logoColor=white" alt="MongooseJS"/><img src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /><img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /><img src="https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>

## Lessons learned


## "What are things I can do early at the start of building a website from scratch, to make the code more modular, flexible, and organized?"
---
- I asked this question, and I will follow the answer.
- I will start from a blank page and build a web application.

Watch the site progress - Deployed site: https://scrapeworks.netlify.app/



## Version History 
---
# 🛠️ ScrapeWorks v0.2 — React/Vite & TailwindCss v4 connected
📅 **Release Date:** July 14, 2025
---
# 📢 Developer's Notes - **Debugging & slight styling**
---
- React would render my elements onto the page, but no utility classes was being applied from tailwind
    - Here's what I did to debug & fix the styling 
        - Made sure the Tailwind CSS file was imported in the main entry point (`main.jsx`).
        - Didn't run `npm run build` so my `dist/` directory was never created 
        - Followed the TailwindCSS v4 documentation for both vite and postcss
            - Created `tailwind.config.js`, `vite.config.js`, & `postcss.config.cjs`
                - Frontend `package.json` tells Node to expect ES modules &  `postcss.config.js` uses CommonJS syntax (`module.exports`) which is not allowed in ES modules
                    - Renaming  `postcss.config.js` to `postcss.config.cjs`
                - Adding `'@tailwindcss/postcss': {} ` to my `plugins` array
                - Setting the `content` array to include all relevant source files inside of `tailwind.config.js` 
---------------------------------------------------------------------------------------------------------------------------
---
# 🛠️ ScrapeWorks v0.1 — MVP functionality testing
📅 **Release Date:** July 2, 2025
---
# 📢 Developer's Notes - **MonoRepo kicking my ass, Functionality concept works**
---
- I learned you can `npm run dev` and connect to <strong>TWO</strong> localhosts on different ports!!!
    - Using `npm run dev` when on `frontend` directory will deploy the website to localhost on port 5173
    - Using `npm run dev` when on `backend` directory will deploy the website to localhost on port 3000
    - While live on localhost:5173, I am sending a POST request to the `/api/scrape` route on the frontend 
        - While also live on localhost:3000, I am listening for POST requests on the `/api/scrape` route on the backend 
            - This interaction is the concept of how to deploy a React frontend on one service (Netlify) & deploy the backend/API on another service (Railway) and have them tie into one web application. 
- I may make a separate repository for frontend.
    - Spent just under 2 days debugging why my tailwindcss classes are visible on my html, but not visually visible on the page
- The web app scrapes the first page of several business categories
    - Currently saves to localStorage for guest-user-flow
        - I was going to wire up the db to save leads after I fixed the tailwindcss bug
            - I didn't fix the bug
---------------------------------------------------------------------------------------------------------------------------
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
