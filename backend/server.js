const express =require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db/db');
const userRoute = require('./routes/userRoute');
const blogRoute = require('./routes/blogRoute');
const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(express.json());




// app.get('/',(req,res)=>{
//     res.send("Blogging site");
// });

app.use('/api/blog-site', userRoute);
app.use('/api/blog-site', blogRoute);

app.listen(PORT, ()=>{
    console.log(`Application running on port ${PORT}`);
})