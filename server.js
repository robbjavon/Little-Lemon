const { request } = require('express');
const express = require('express');
const app = express();
require("dotenv").config();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3500;

//middleware
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})