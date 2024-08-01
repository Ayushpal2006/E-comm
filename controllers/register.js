var express = require('express');
var router = express.Router();
var userModel = require('../Models/user-model')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var {generateToken } = require('../Utils/generateToken')
async function register(req, res, next) {

    let { fullName, email, passWord } = req.body;

    let alreadyUser = await userModel.findOne({ email});
    if(alreadyUser) return res.status(400).send({message:"Brother You have already registered with this email. Try another one."});
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(passWord, salt,async function (err, hash) {
        if (err) console.log(err);
        else {
  
          var users = await userModel.create({
            fullName,
            email,
            passWord:hash,
          });
  
          var token = generateToken(users);
          res.cookie("token", token);
          console.log(users);
          res.status(201).send(users);
        }
      })
    })
  }

module.exports.register = register;
