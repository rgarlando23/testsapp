const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// Function to validate hex color
const isValidHex = (hex) => /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);

// Serve the main page with the color passed as a query parameter
app.get('/', (req, res) => {
    const color = req.query.color;
    const backgroundColor = isValidHex(color) ? color : '#FFFFFF';  // Default to white if invalid
    res.render('index', { color: backgroundColor });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
