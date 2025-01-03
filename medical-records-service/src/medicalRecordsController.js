// src/medicalRecordsController.js
const express = require('express');
const app = express();

// Endpoint to get medical records (simple response for now)
app.get('/medical-records', (req, res) => {
  res.send('Medical Records Service Running');
});

// Set the server to listen on port 3002
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Medical Records Service listening on port ${PORT}`);
});

module.exports = app;
