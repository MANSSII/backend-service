const express = require('express');
const app = express();
const PORT = 3001;

// API endpoint to provide data to the frontend
app.get('/api/data', (req, res) => {
  const responseData = { data: 'Hello from Backend Microservice (ServiceB)' };
  res.json(responseData);
});

app.listen(PORT, () => {
  console.log(`Backend Microservice (ServiceB) is running on http://localhost:${PORT}`);
});

