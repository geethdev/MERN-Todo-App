const express = require ('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
//use express.json() to get data into json format
app.use(express.json()); 
//port
const PORT = process.env.PORT || 5500;



//lets connect to mongo db
mongoose.connect(process.env.DB_CONNECT)
.then(()=>console.log("Database connected"))
.catch(err => console.log(err));


//add port and connect to server
app.listen(PORT, ()=> console.log("Server connected"));







//add port and connect to server
app.listen();
