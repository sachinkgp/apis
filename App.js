const express = require('express')();
const app = express;
const PORT = 8080;

// app.use(express.json());
// Databse User "sachin" passwor "2ScnKs1sDRsqG0yo"; 
app.get('/testuri1',(req,res)=>{
    res.status(200).send({
        name : "sachin",
        age : 25
    })
})

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(
    PORT,()=>{
        console.log(`yippi running the api at http://localhost:${PORT}`)
    }
)