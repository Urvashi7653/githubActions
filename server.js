const express = require('express');

const app = express();
const port = 9000;

// Define a basic route
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
