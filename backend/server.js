const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const scrapeRoutes = require('./routes/scrape');
const PORT = process.env.PORT || 3000;
require('dotenv').config({path: './config/.env'});
connectDB()
// Middleware 
app.use(cors());
// Restrict frontend domain in production
// app.use(cors({
//     origin: 'production_url',
//     credentials: true, // if you need to send cookies/auth
//   }));
app.use(express.json());    // Parses JSON
app.use(morgan('dev'));     // Logging

// Routes
app.get('/', (req, res) => {
    res.send('Hello from ScrapeWorks backend!');
  });
app.use('/api/scrape', scrapeRoutes);
// Error handling routes
app.use((req, res) => {
    res.status(404).json({ error: 'Does not exist' });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, ()=>{
    console.log(`Server is running, you better catch it! ${PORT}`)
})    