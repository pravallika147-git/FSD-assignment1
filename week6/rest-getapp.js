const express = require('express');
const app = express();
const port = 3002;
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API',
        status: "Active",
        timestamp: new Date()
    });
});
app.get('/data/:id', (req, res) => {
    const productId = req.params.id;
    const sampleData = [
        { id: 1, name: 'Alice', description: 'This is person 1' },
        { id: 2, name: 'Bob', description: 'This is person 2' },
        { id: 3, name: 'Charlie', description: 'This is person 3' }    
    ];
    const product = sampleData.find(p => p.id === parseInt(productId));
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
});
app.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
});