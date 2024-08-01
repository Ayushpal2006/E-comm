
var userModel = require('../Models/user-model')
var bcrypt = require('bcrypt');
var {generateToken } = require('../Utils/generateToken')
async function login(req,res,next){
    let {email ,passWord} = req.body;
    let user = await userModel.findOne({email});
  
    if(!user) return res.status(400).send("User not found");
  
    bcrypt.compare(passWord, user.passWord , function(err, result) {
      if(err) return res.status(500).send("Server Error");
  
      if(result) {
        let token = generateToken(user);
        res.cookie("token", token);
        res.status(200).send({message:"Login Successful", user});
        } else {
        res.status(400).send("Invalid Password");
    
      }
    })
  }

module.exports.login = login; 