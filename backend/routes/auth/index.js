var express = require('express');
var router = express.Router();
var cryptojs = require('crypto-js');
const {MongoClient} = require('mongodb');
const {generateAccessToken} = require('./functions');
var url = "mongodb://localhost:27017/";

//localhost:3000/auth - POST (email, password) -> token
router.post('/', async function(req,res){
    try{
        var email = req.body.email;
        var password = cryptojs.SHA512(req.body.password).toString();

        var client = new MongoClient(url);
        var database = client.db('ISL');
        var collection = database.collection('users');

        var user = await collection.countDocuments({
            email,password
        })

        if(user === 1)
        {
            //correct login details
            var token = generateAccessToken(email);
            res.json({token})
        }else{
            //incorect login details
            res.json({message:"Username or password are incorrect"})
        }

    }catch(error)
    {
        console.log(error)
        res.status(500).json({message:"An error occored when logging in"});
    }
})
