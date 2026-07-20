const express =require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db/db');
const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

app.get('/',(req,res)=>{
    res.send("Blogging site");
});

app.listen(PORT, ()=>{
    console.log(`Application running on port ${PORT}`);
})