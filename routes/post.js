const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

router.post('/createpost',(req,res)=>{
    const {title,body,photo} = req.body
    if(!title || !body){
        res.status(422).json({error:"please provide all fields"})
    }
    console.log(req.user)
    // const post = new post({
    //     title,
    //     body,
    //     postedBy
    // })
})

module.exports = router