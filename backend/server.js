const express = require("express");
const morgan = require("morgan");

const app = express();

const submitFormRoute = require('./routes/submitFormRoute');

const PORT = process.env.PORT || 3001;

app.use('/api/forms', submitFormRoute); // Use route for form API

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
