const express = require("express");
const morgan = require("morgan");
const submitFormRoutes = require("./routes/submitFormRoute");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Define a route for the root path
app.get("/", (req, res) => {
    res.send("Hey Luke! Great work, this message is just a test");
});

// Register routes
app.use("/api/forms", submitFormRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
