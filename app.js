const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, 'pages/assets')));
app.use(express.static(path.join(__dirname, 'pages')));

const homePath = path.resolve('pages/home.html'); // Using path.resolve to get absolute path
console.log('Resolved home path:', homePath);

app.get('/', (req, res) => {
  res.sendFile(homePath);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
