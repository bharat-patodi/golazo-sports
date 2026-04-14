const path = require("path");
const express = require("express");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
