const express = require('express')
const app = express()
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
const homeRoutes = require('./routes/home')
const PORT = process.env.PORT || 3000;

// Middleware 
app.use(express.json());    // Parses JSON
app.use(morgan('dev'));     // Logging

// Routes
// app.use('/', homeRoutes)

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from ScrapeWorks backend!');
  });

// Error handling routes
app.use((req, res) => {
    res.status(404).render('errors/404');
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('errors/500');
});

app.listen(PORT, ()=>{
    console.log(`Server is running, you better catch it! ${PORT}`)
})    