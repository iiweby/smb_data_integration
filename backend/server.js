// server.js

const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json()); // parse incoming JSON requests
app.use(morgan('dev'));  // logging middleware with morgan


// temp error handler middleware, will develop later in errorHandler.js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
