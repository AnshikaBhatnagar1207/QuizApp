const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow requests from the frontend

// Proxy route
app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
    res.json(response.data); // Send the data to the frontend
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
