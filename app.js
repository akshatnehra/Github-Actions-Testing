const express = require('express');
const app = express();
const port = 3000;

// Initialize the counter
let counter = 0;

app.get('/', (req, res) => {
  // Increment the counter
  counter++;
  
  // Send the counter value in the response
  res.send(`Hello World! This endpoint has been hit ${counter} times.`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});