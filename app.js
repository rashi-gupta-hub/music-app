const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve the root files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname,'style.css'));
});

app.get('/audio', (req, res) => {
    res.setHeader('Content-Type', 'audio/mpeg');
    res.sendFile(path.join(__dirname, 'public', 'song2.mp3'));
  });

// Serve static assets from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
