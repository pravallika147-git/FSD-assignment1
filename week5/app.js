const express=require('express');
const app=express();

const PORT=3000;

app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/about',(req,res)=>{
    res.send('About Page');
});
app.get('/api/status',(req,res)=>{
    res.json({
        active: true,
        status: 'ok'
    });
});
app.post('/api/data',(req,res)=>{
    res.json({
        message: 'Data received'
    });
});
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});