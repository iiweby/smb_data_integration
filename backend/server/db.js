const mongoose = require("mongoose");

// Replace with your MongoDB connection string
const mongoURI = "mongodb://localhost:27017/yourDatabaseName";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection event
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to " + mongoURI);
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// Export the mongoose connection
module.exports = mongoose;
