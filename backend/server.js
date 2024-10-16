// server.js

const express = require('express');
const morgan = require('morgan');
const routes = require('./routes'); // Assuming you have a routes folder for your routes

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json()); // To parse incoming JSON requests
app.use(morgan('dev'));  // Logging middleware

// Routes
app.use('/api', routes);  // Assuming routes are under '/api'

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
