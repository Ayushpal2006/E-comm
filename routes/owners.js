var express = require('express');
var router = express.Router();
var ownerModel = require("../Models/Owner-model")


router.post("/", async function (req, res) {
  let owners = await ownerModel.find();
  if (owners.length > 0) {
    return res.status(503).send("You don't have permission");
  }

  let { fullName, email, passWord } = req.body;

  let createdOwner = await ownerModel.create({
    fullName,
    email,
    passWord,
  });

  console.log(createdOwner);
  return res.status(201).send(createdOwner);
});


router.get('/', function(req, res, next) {
  res.send('This is Working');
});

module.exports = router;