const express = require('express')();
const app = express;
const PORT = 8080;

// app.use(express.json());

app.get('/testuri1',(req,res)=>{
    res.status(200).send({
        name : "sachin",
        age : 25
    })
})

app.listen(
    PORT,()=>{
        console.log(`yippi running the api at http://localhost:${PORT}`)
    }
)