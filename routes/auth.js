const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')

router.get('/protected',requireLogin,(req,res)=>{
    // req.header
    return res.send("hello sir")
})

router.get('/signin',(req,res)=>{
    const {email,password} = req.body
    User.findOne({email})
    .then((savedUser)=>{
        if(!savedUser){
            return res.json({message:"User does not exist with given email id"})
        }
        if(savedUser.password == password){
            const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
            return res.json({token})
        }
        return res.json({message:"wrong password"})
    })
})

router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        return res.status(422).json({error:"please add all fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
        return res.status(422).json({error:"User already exist with given email id"})
        }
        const user = new User ({
            name,
            email,
            password
        })
        user.save()
        .then(user=>{
            res.json({message:"saved successfully"})
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router