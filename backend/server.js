const express = require("express");
const connectDB = require("./database/db");
const colors = require("colors");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // To parse JSON bodies

// Define routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.cyan.underline);
});
