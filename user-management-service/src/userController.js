// src/userController.js
const express = require('express');
const app = express();

// Endpoint to get users (simple response for now)
app.get('/users', (req, res) => {
  res.send('User Service Running');
});

// Set the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`User Service listening on port ${PORT}`);
});

module.exports = app;
