// src/appointmentController.js
const express = require('express');
const app = express();

// Endpoint to get appointments (simple response for now)
app.get('/appointments', (req, res) => {
  res.send('Appointment Service Running');
});

// Set the server to listen on port 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Appointment Service listening on port ${PORT}`);
});

module.exports = app;
