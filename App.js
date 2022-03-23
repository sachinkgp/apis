const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
// const User = mongoose.model("User")
const {MONGOURI} = require('./keys');
require('./models/user')
require('./models/post')

app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))
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