const express = require('express');
const app = express();
const port = 3001; 
app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Product ID: ${productId}`);
});
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search Query: ${query}`);
}); 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
