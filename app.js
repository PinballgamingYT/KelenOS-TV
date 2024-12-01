const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the assets directory
app.use('/assets', express.static(path.join(__dirname, 'pages/assets')));
app.use(express.static(path.join(__dirname, 'pages'))); // Serve static files from the pages directory

// Define route for your homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
