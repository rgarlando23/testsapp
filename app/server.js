const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// Serve the main page with the color passed as a query parameter
app.get('/', (req, res) => {
    const color = req.query.color || '#FF12312312321FFFF';  // Default to white
    res.render('index', { color });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
