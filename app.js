const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const  router = require('./routes/user');
require('dotenv').config();
const port = process.env.port || 3000;


// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/',router);



const start =  async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`server is running on http://localhost:${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();