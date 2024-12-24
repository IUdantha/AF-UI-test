require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.SERVER_PORT || 5000;

// Import MongoDB client
const {connectToDB} = require("./config/db");

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to set headers for CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE"); // Allow specified methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specified headers
  next();
});

// Middleware for JWT authentication
const authMiddleware = require("./middleware/authMiddleware");

// MongoDB connection URL
const mongoURL = process.env.MONGO_URL;

// Connect to MongoDB
connectToDB(mongoURL)
  .then((client) => {
    // Define the route
    app.get("/", (req, res) => {
      res.send("Welcome To MARS System Backend!");
    });

    // Public routes (no authentication required)
    app.use("/api/users", require("./routes/auth/userRoutes"));

    // Protected routes (require authentication)
    // ---------------add here later as needed---------------------

    // Define a route to test MongoDB connection
    app.get("/test-mongodb", async (req, res) => {
      try {
        const db = client.db(); // Access the database
        const collection = db.collection("test"); // Access a collection
        const result = await collection.find({}).toArray(); // Perform a query
        res.json(result); // Send the result as JSON
      } catch (error) {
        console.error("Error querying MongoDB:", error);
        res.status(500).json({error: "Error querying MongoDB"});
      }
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    // Handle error
    process.exit(1); // Exit the process if MongoDB connection fails
  });
