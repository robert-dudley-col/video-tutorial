var express = require('express');
var router = express.Router();
const {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017/";
var crypto = require('crypto-js');
var UserFunctions = require('./functions');
var AuthFunctions = require('../auth/functions');
const {GetMe} = require('./@me');

router.get('/@me',(req,res) => GetMe(req,res));

router.post('/', async function(req,res){
    try {
        var token = req.headers['authorization'];
        if(AuthFunctions.authenticateToken(token)){
            //token valid
            var email = req.body.email;
            var password = crypto.SHA512(req.body.password).toString();
            var client = new MongoClient(url);
            var database = client.db('ISL');
            var collection = database.collection('users');
            if(await UserFunctions.CheckEmailExists(email))
            {
                res.status(500).json({message:"Email is already in use"});
            }else{
                var newUser = await collection.insertOne({
                    email,password
                })
                if(newUser.acknowledged)
                {
                    res.json({message:"User created"})
                }else{
                    res.status(500).json({message:"An error occored when creating user"});
                }
            }
        }else{
            //token not valid
            res.status(500).json({message:"You are not signed in", loggedIn:false})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"An error occored when creating user"});
    }
})

module.exports = router;