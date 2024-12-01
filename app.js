const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, 'pages/assets')));
app.use(express.static(path.join(__dirname, 'pages'))); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
