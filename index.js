const express = require('express')

const app = express();
const port = 5050;

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get('/about', (req, res) => {
  res.send('Currently learning CI/CD');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});