const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// The original greeting function
function greet(name) {
    return `Hello, ${name}!`;
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = {
    greet
}; 