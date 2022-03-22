const express = require('express')();
const app = express;
const PORT = 8080;
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys');
require('./models/user')

mongoose.connect(MONGOURI);
mongoose.connection.on('connected', ()=>{
    console.log("connected to mongoose yeah")
})
mongoose.connection.on('error', (err)=>{
    console.log("error connecting to mongodb",err)
})

app.listen(
    PORT,()=>{
        console.log(`yippi running the api at http://localhost:${PORT}`)
    }
)