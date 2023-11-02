const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable for hosting or a default port

// Add your routes and middleware here

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
